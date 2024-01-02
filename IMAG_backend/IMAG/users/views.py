import os
from functools import wraps
import ast
from flask import *
from flask import Blueprint, request, render_template
from sqlalchemy.sql.elements import or_
from libs.db import DBSession, Conf, Account, Tch, Stu, Jn, Patent, Prog, Comp, Mono, Soft, Gra, Honor, Course
from login.views import save_avatar, login_required, save_resume

users_bp = Blueprint('users', import_name='users')
users_bp.template_folder = './templates'
users_bp.static_folder = './static'



# 实验室成员展示页面
@users_bp.route('/people_page', methods=('GET', 'POST'))
def people_page():
    sessions = DBSession()
    faculty = sessions.query(Tch).join(Account, Tch.account == Account.account).filter(
        or_(Tch.tch_classify == '博士生导师', Tch.tch_classify == '硕士生导师', Tch.tch_classify == '其他老师'),
        Account.examine == '1')
    ass_faculty = sessions.query(Tch).join(Account, Tch.account == Account.account).filter(Tch.tch_classify == '其他老师',
                                                                                           Account.examine == '1').all()
    PhD = sessions.query(Stu).join(Account, Stu.account == Account.account).filter(
        Stu.stu_classify == '博士生', Account.examine == '1').all()
    ME = sessions.query(Stu).join(Account, Stu.account == Account.account).filter(Stu.stu_classify == '硕士生',
                                                                                  Account.examine == '1').all()
    graduates = sessions.query(Gra).all()
    sessions.close()
    return render_template('people_page.html', faculty=faculty, ass_faculty=ass_faculty, PhD=PhD, ME=ME,
                           graduates=graduates)


# 学生个人资料
@users_bp.route('/stu_info/<account>/', methods=('GET', 'POST'))
def stu_info(account):
    sessions = DBSession()
    stu_info = sessions.query(Stu).filter(Stu.account == account).first()
    if request.method == 'POST':
        stu_account = sessions.query(Account).filter(Account.account == account).first()
        stu_info.stu_classify = stu_info.stu_classify
        stu_info.phone = stu_info.phone
        stu_info.email = stu_info.email
        if request.files['avatar']:
            save_avatar(stu_info.account, request.files['avatar'])
        if request.files['resume']:
            save_resume(stu_info.account, request.files['resume'])
        if request.form.get('password', '') != '':
            stu_account.password = request.form.get('password', '')
        sessions.commit()
        return redirect(url_for("users.stu_page", account=stu_info.account))
    return render_template('stu_info.html', stu_info=stu_info, account_url=stu_info)


# 教师个人资料
@users_bp.route('/tch_info/<account>/', methods=('GET', 'POST'))
def tch_info(account):
    sessions = DBSession()
    tch_info = sessions.query(Tch).join(Account, Account.account == Tch.account).filter(Tch.account == account).first()
    if request.method == 'POST':
        tch_account = sessions.query(Account).filter(Account.account == account).first()
        tch_info.tch_classify = request.form.get('classify', '').strip()
        tch_info.phone = request.form.get('phone', '').strip()
        tch_info.email = request.form.get('email', '').strip()
        tch_info.profile = request.form.get('profile', '').strip()
        if request.files['avatar']:
            save_avatar(tch_info.account, request.files['avatar'])
        if request.files['resume']:
            save_resume(tch_info.account, request.files['resume'])
        if request.form.get('password', '') != '':
            tch_account.password = request.form.get('password')
        sessions.commit()
        return redirect(url_for("users.tch_page", account=tch_info.account))
    return render_template('tch_info.html', tch_info=tch_info, account_url=tch_info)


# 学生个人主页
@users_bp.route('/stu_page/<account>/', methods=('GET', 'POST'))
def stu_page(account):
    sessions = DBSession()
    stu_info = sessions.query(Stu).filter(Stu.account == account).first()
    conf_info_dict = paper(stu_info.conference, Conf)
    jn_info_dict = paper(stu_info.journal, Jn)
    patent_info = gain(stu_info.patent, Patent)
    prog_info = gain(stu_info.program, Prog)
    mono_info = gain(stu_info.monograph, Mono)
    soft_info = gain(stu_info.software, Soft)
    comp_info = gain(stu_info.competition, Comp)
    sessions.close()
    return render_template('stu_page.html', stu_info=stu_info, conf_info_dict=conf_info_dict, jn_info_dict=jn_info_dict,
                           patent_info=patent_info, prog_info=prog_info, mono_info=mono_info, soft_info=soft_info,
                           comp_info=comp_info, account_url=stu_info)


# 教师个人主页
@users_bp.route('/tch_page/<account>/', methods=('GET', 'POST'))
def tch_page(account):
    sessions = DBSession()
    data = sessions.query(Tch).filter(Tch.account == account).first().display
    data = eval(data)
    print(data)
    tch_info = sessions.query(Tch).filter(Tch.account == account).first()
    conf_info_dict = paper(tch_info.conference, Conf, data['conf'])
    jn_info_dict = paper(tch_info.journal, Jn, data['jn'])
    patent_info = gain(tch_info.patent, Patent, data['patent'])
    prog_info = gain(tch_info.program, Prog, data['prog'])
    mono_info = gain(tch_info.monograph, Mono, data['mono'])
    soft_info = gain(tch_info.software, Soft, data['soft'])
    comp_info = gain(tch_info.competition, Comp, data['comp'])
    honor_info = gain(tch_info.honor, Honor, data['honor'])
    course_info = gain(tch_info.course, Course, data['course'])
    return render_template('tch_page.html', tch_info=tch_info, conf_info_dict=conf_info_dict, jn_info_dict=jn_info_dict,
                           patent_info=patent_info, prog_info=prog_info, mono_info=mono_info, soft_info=soft_info,
                           comp_info=comp_info, honor_info=honor_info, course_info=course_info, account_url=tch_info)


# 教师个人主页
@users_bp.route('/tch_page_database/<account>/', methods=('GET', 'POST'))
def tch_page_database(account):
    sessions = DBSession()
    tch_info = sessions.query(Tch).filter(Tch.account == account).first()
    conf_info_dict = paper(tch_info.conference, Conf)
    jn_info_dict = paper(tch_info.journal, Jn)
    patent_info = gain(tch_info.patent, Patent)
    prog_info = gain(tch_info.program, Prog)
    mono_info = gain(tch_info.monograph, Mono)
    soft_info = gain(tch_info.software, Soft)
    comp_info = gain(tch_info.competition, Comp)
    honor_info = gain(tch_info.honor, Honor)
    course_info = gain(tch_info.course, Course)
    return render_template('tch_page_database.html', tch_info=tch_info, conf_info_dict=conf_info_dict,
                           jn_info_dict=jn_info_dict,
                           patent_info=patent_info, prog_info=prog_info, mono_info=mono_info, soft_info=soft_info,
                           comp_info=comp_info, honor_info=honor_info, course_info=course_info, account_url=tch_info)


# 教师个人主页
@users_bp.route('/tch_page_public/<id>/', methods=('GET', 'POST'))
def tch_page_public(id):
    sessions = DBSession()
    data = sessions.query(Tch).filter(Tch.id == id).first().display
    data = eval(data)
    tch_info = sessions.query(Tch).filter(Tch.id == id).first()
    conf_info_dict = paper(tch_info.conference, Conf, data['conf'])
    jn_info_dict = paper(tch_info.journal, Jn, data['jn'])
    patent_info = gain(tch_info.patent, Patent, data['patent'])
    prog_info = gain(tch_info.program, Prog, data['prog'])
    mono_info = gain(tch_info.monograph, Mono, data['mono'])
    soft_info = gain(tch_info.software, Soft, data['soft'])
    comp_info = gain(tch_info.competition, Comp, data['comp'])
    honor_info = gain(tch_info.honor, Honor, data['honor'])
    course_info = gain(tch_info.course, Course, data['course'])
    sessions.commit()
    return render_template('tch_page_public.html', tch_info=tch_info, conf_info_dict=conf_info_dict,
                           jn_info_dict=jn_info_dict,
                           patent_info=patent_info, prog_info=prog_info, mono_info=mono_info, soft_info=soft_info,
                           comp_info=comp_info, honor_info=honor_info, course_info=course_info, account_url=tch_info)


# 用户主页修改后端
@users_bp.route('/user_database', methods=('GET', 'POST'))
def user_database():
    sessions = DBSession()
    data = request.get_json()
    account = data['account']
    conf = data['conf']
    prog = data['prog']
    jn = data['jn']
    course = data['course']
    patent = data['patent']
    honor = data['honor']
    comp = data['comp']
    mono = data['mono']
    soft = data['soft']
    user_info = sessions.query(Tch).filter(Tch.account == account).first()
    if user_info is None:
        user_info = sessions.query(Stu).filter(Stu.account == account).first()
    dic_conf = dict()
    dic_jn = dict()
    for item in conf:
        id = item['id']
        list = eval(item['list'])
        dic_conf[str(id)] = list
    for item in jn:
        id = item['id']
        list = eval(item['list'])
        dic_jn[str(id)] = list
    user_info.conference = str(dic_conf)
    user_info.journal = str(dic_jn)
    user_info.program = str(prog)
    user_info.software = str(soft)
    user_info.course = str(course)
    user_info.patent = str(patent)
    user_info.honor = str(honor)
    user_info.monograph = str(mono)
    user_info.competition = str(comp)
    sessions.commit()
    sessions.close()
    response = dict()
    response['message'] = "保存成功!"
    return json.dumps(response, ensure_ascii=False)


# 用户主页修改后端
@users_bp.route('/user_page_back', methods=('GET', 'POST'))
def user_page_back():
    sessions = DBSession()
    data = request.get_json()
    account = data['account']
    display = data['display']
    user_info = sessions.query(Tch).filter(Tch.account == account).first()
    if user_info is None:
        user_info = sessions.query(Stu).filter(Stu.account == account).first()
    user_info.display = str(display)
    sessions.commit()
    sessions.close()
    response = dict()
    response['message'] = "保存成功!"
    return json.dumps(response, ensure_ascii=False)


# conference和journal等有多个作者添加的个人主页显示函数
def paper(paper, DB, display=None):
    paper_info_dict=[]
    sessions = DBSession()
    paper_dict=[]
    for key,value in eval(paper).items():
        paper_dict.append(eval(key))
    if display is not None:
        display_dict = []
        for key in display:
            display_dict.append(eval(key))
        res=display_dict
    else:
        res=paper_dict
    for key in res:
        if key in paper_dict:
            paper_info = sessions.query(DB).filter(DB.id == key).first()
            if paper_info is not None:
                paper_info_every = dict()
                item=str(key)
                paper_info_every['author'] = eval(paper)[item]
                paper_info_every['id'] = paper_info.id
                paper_info_every['name'] = paper_info.name
                paper_info_dict.append(paper_info_every)
    print(paper_info_dict)
    return paper_info_dict


# 成果展示
def gain(gain, DB, display=None):
    res = []
    if display is None:
        gain_list=[int(x) for x in eval(gain)]
    else:
        gain_list=[int(x) for x in display]
    sessions = DBSession()
    for item in gain_list:
        if str(item) in gain:
            every_res = sessions.query(DB).filter(DB.id == item).first()
            if every_res is not None:
                every = dict()
                every['id'] = every_res.id
                every['name'] = every_res.name
                res.append(every)
    print(res)
    return res

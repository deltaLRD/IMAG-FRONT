import ast
import functools
import io
import os
from math import floor

from PIL import Image
import os
from PIL import Image
from PIL import ImageFile
from functools import wraps
from wsgiref.simple_server import demo_app
# from flack_cors import cross_origin
from flask import *
from flask import Blueprint, request, render_template, Response
import json
import base64
import datetime

from flask_cors import cross_origin
# import cv2
from .models import Admin
# from models import Admin
from libs.db import DBSession, Conf, Account, Jn, Patent, Honor, Prog, Course, Comp, Soft, Mono, News, Resource, Tch, \
    Stu, Gra, Issues, People

home_bp = Blueprint('home', import_name='home')
home_bp.template_folder = './templates'
home_bp.static_folder = './static'


def compress_image_totiny(inputfile, outfile, mb=100, quality=85, k=0.9):  # 通常你只需要修改mb大小
    """不改变图片尺寸压缩到指定大小
    :param outfile: 压缩文件保存地址
    :param mb: 压缩目标，KB
    :param k: 每次调整的压缩比率
    :param quality: 初始压缩比率
    :return: 压缩文件地址，压缩文件大小
    """

    im = Image.open(inputfile)
    im = im.convert('RGB')
    # col = im.size[0]
    # out = im.resize((int(col), int(col * 1.5)), Image.ANTIALIAS)
    im.save(outfile, quality=100)
    o_size = os.path.getsize(outfile) // 1024  # 函数返回为字节，除1024转为kb（1kb = 1024 bit）
    print('before_size:{} after_size:{}'.format(o_size, mb))
    if o_size <= mb:
        return outfile

    ImageFile.LOAD_TRUNCATED_IMAGES = True  # 防止图像被截断而报错

    while o_size > mb:
        im = Image.open(outfile)
        im = im.convert('RGB')
        x, y = im.size
        out = im.resize((int(x * k), int(y * k)), Image.ANTIALIAS)  # 最后一个参数设置可以提高图片转换后的质量
        try:
            out.save(outfile, quality=quality)  # quality为保存的质量，从1（最差）到95（最好），此时为85
        except Exception as e:
            print(e)
            break
        o_size = os.path.getsize(outfile) // 1024
    # out = im.resize((200, 300), Image.ANTIALIAS)
    # out.save(outfile, quality=quality)
    return outfile


def defaultconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()


# conference界面
@home_bp.route('/conference', methods=('GET', 'POST'))
@cross_origin()
def conference():
    sessions = DBSession()
    info = sessions.query(Conf).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['name'] = row.name
        dict_temp['author'] = row.author
        dict_temp['conferenceName'] = row.conf_name
        dict_temp['dat'] = row.dat
        dict_temp['citation'] = row.times
        dict_temp['ccf'] = row.ccf
        dict_temp['link'] = row.link
        data.append(dict_temp)
    response['data'] = data
    sessions.close()
    return json.dumps(response, default=defaultconverter)


# journal界面
@home_bp.route('/journal', methods=('GET', 'POST'))
@cross_origin()
def journal():
    sessions = DBSession()
    info = sessions.query(Jn).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['name'] = row.name
        dict_temp['author'] = row.author
        dict_temp['journalName'] = row.jn_name
        dict_temp['dat'] = row.dat
        dict_temp['citation'] = row.times
        dict_temp['ccf'] = row.ccf
        dict_temp['link'] = row.link
        data.append(dict_temp)
    response['data'] = data
    sessions.close()
    return json.dumps(response, default=defaultconverter)


# patent界面
@home_bp.route('/patent', methods=('GET', 'POST'))
@cross_origin()
def patent():
    sessions = DBSession()
    info = sessions.query(Patent).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['name'] = row.name
        dict_temp['patentee'] = row.patentee
        dict_temp['effectDat'] = row.effect_dat
        data.append(dict_temp)
    response['data'] = data
    sessions.close()
    return json.dumps(response, default=defaultconverter)


# monograph界面
@home_bp.route('/monograph', methods=('GET', 'POST'))
@cross_origin()
def monograph():
    sessions = DBSession()
    info = sessions.query(Mono).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['name'] = row.name
        dict_temp['editor'] = row.editor
        dict_temp['dat'] = row.dat
        data.append(dict_temp)
    response['data'] = data
    sessions.close()
    return json.dumps(response, default=defaultconverter)


# softwareCopyright界面
@home_bp.route('/softwareCopyright', methods=('GET', 'POST'))
@cross_origin()
def softwareCopyright():
    sessions = DBSession()
    info = sessions.query(Soft).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['name'] = row.name
        dict_temp['author'] = row.author
        dict_temp['times'] = row.times
        data.append(dict_temp)
    response['data'] = data
    sessions.close()
    return json.dumps(response, default=defaultconverter)


# project界面
@home_bp.route('/project', methods=('GET', 'POST'))
@cross_origin()
def project():
    response = dict()
    response['status'] = 1
    data = Admin(Prog, 'project').getAll()['data']
    response['data'] = data
    print(response)
    return response


# monograph界面
@home_bp.route('/news', methods=('GET', 'POST'))
@cross_origin()
def news():
    sessions = DBSession()
    info = sessions.query(News).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['title'] = row.title
        dict_temp['publisher'] = row.publisher
        dict_temp['content'] = row.content
        dict_temp['dat'] = row.dat
        dict_temp['classify'] = row.classify
        dict_temp['content'] = row.content
        data.append(dict_temp)
    response['data'] = data
    sessions.close()
    return json.dumps(response, default=defaultconverter)


def get_size(filename):
    # Obtain the file size: KB
    size = os.path.getsize(filename)
    return size / 1024


def compress_image(img_path, out_path, mb=50, step=5, quality=100):
    """不改变图片尺寸压缩图像大小
    :param img_path: 压缩图像读取地址
    :param out_path: 压缩图像存储地址
    :param mb: 压缩目标，KB
    :param step: 每次调整的压缩比率
    :param quality: 初始压缩比率
    :return: 压缩文件地址，压缩文件大小
    """
    o_size = get_size(img_path)
    if o_size < mb:
        return Image.open(img_path)

    img = Image.open(img_path)
    img = img.convert('RGB')
    img.save(out_path, quality=100)
    while o_size > mb:
        img = Image.open(out_path)
        img = img.convert('RGB')
        img.save(out_path, quality=quality)
        if quality - step < 0:
            break
        quality -= step
        o_size = get_size(out_path)

    print('File size: ' + str(o_size))
    return img


@home_bp.route('/competition_pic', methods=('GET', 'POST'))
def competition_pic():
    inPath = 'D:/App_data/VX/WeChat Files/wxid_yaglulrtm3ka22/FileStorage/File/2022-07/IMAG/IMAG/competition/static/competition_encd/'
    outPath = 'C:/Users/10185/Desktop/front/imag-home/src/static/competition_encd/'
    data = Admin(Comp, 'competition').getAll()['data']
    for item in data:
        path1 = inPath + str(item['id']) + '/' + item['pic']
        path2 = outPath + str(item['id']) + '/' + item['pic']
        path3 = outPath + str(item['id']) + '/' + 'tiny_' + item['pic']
        compress_image(path1, path2, 300)
        compress_image_totiny(path1, path3, 2)
    return {'msg': 'success!'}


# competition界面
@home_bp.route('/competition', methods=('GET', 'POST'))
@cross_origin()
def competition():
    response = dict()
    response['status'] = 1
    data = Admin(Comp, 'competition').getAll()['data']
    response['data'] = data
    return json.dumps(response, ensure_ascii=False)


# course界面
@home_bp.route('/course', methods=('GET', 'POST'))
@cross_origin()
def course():
    sessions = DBSession()
    info = sessions.query(Course).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['name'] = row.name
        dict_temp['teacher'] = row.teacher
        data.append(dict_temp)
    response['data'] = data
    sessions.close()
    return json.dumps(response, default=defaultconverter)


# honor界面
@home_bp.route('/honor', methods=('GET', 'POST'))
@cross_origin()
def honor():
    sessions = DBSession()
    info = sessions.query(Honor).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['name'] = row.name
        dict_temp['title'] = row.title
        data.append(dict_temp)
    response['data'] = data
    print('response', response)
    sessions.close()
    return json.dumps(response, default=defaultconverter)


def image_clip(filename, savename, width_scale, height_scale):
    """图像裁剪

    :param filename: 原图路径
    :param savename: 保存图片路径
    :param width_scale: 宽的比例
    :param height_scale: 高的比例
    """
    image = Image.open(filename)
    image = image.convert('RGB')
    (width, height), (_width, _height) = image.size, image.size
    _width = height / height_scale * width_scale
    left = round((width - _width) / 2)
    top = round((height - _height) / 2)
    x_right = round(width - _width) - left
    x_bottom = round(height - _height) - top
    right = width - left
    bottom = height - top
    # _height = width / width_scale * height_scale
    # if _height > height:
    #     _height = height
    #     _width = width_scale * height / height_scale
    image.crop((left, top, right, bottom)) # 左上角
    (w,h)=image.size
    image.save(savename, quality=100)
    print(w,h)
    print('裁剪成功')
    return {'msg':'裁剪成功！'}
    # image.crop((0, height - _height, _width, height)).save(savename)  # 左下角
    # image.crop((width - _width, 0, width, _height)).save(savename)  # 右上角
    # image.crop((width - _width, height - _height, width, height)).save(savename)  # 右下角


# resource界面
@home_bp.route('/resource', methods=('GET', 'POST'))
@cross_origin()
def resource():
    sessions = DBSession()
    info = sessions.query(Resource).all()
    response = dict()
    response['status'] = 1
    data = list()
    for row in info:
        dict_temp = dict()
        dict_temp['id'] = row.id
        dict_temp['name'] = row.name
        dict_temp['link'] = row.link
        data.append(dict_temp)
    response['data'] = data
    sessions.close()
    return json.dumps(response, default=defaultconverter)


# 用户图片裁剪
@home_bp.route('/avatar', methods=('GET', 'POST'))
def avatar():
    all_counts = eval(get_all_id())
    accounts = all_counts['accounts']  # 所有用户的账号
    inPath = 'D:/App_data/VX/WeChat Files/wxid_yaglulrtm3ka22/FileStorage/File/2022-07/IMAG/IMAG/users/static/avatar/'  # 后端项目所在文件夹
    outPath = 'C:/Users/10185/Desktop/front/imag-home/public/static/avatar/'  # 前端项目所在文件夹
    for item in accounts:
        path1 = inPath + item + '.jpg'
        path2 = outPath + item + '.jpg'
        if os.path.exists(path1):
            compress_image_totiny(path1, path2, 10)
            # image_clip(path1,path2,1,1.5)
    # image_clip(inPath + 'machiachi@163.com.jpg', outPath + 'machiachi@163.com.jpg', 3, 4)
    return {'msg': 'success!'}


# 请求图片
@home_bp.route('/pic', methods=('GET', 'POST'))
@cross_origin()
def pic():
    # print(os.getcwd())
    # print("---------")
    data = request.get_data()
    print(data)
    data = json.loads(data)

    # data['path'] = data['path'] + '.jpg'
    if not os.path.exists(data['path']):
        print('---000---')
        data['path'] = '../users/static/avatar/000001.jpg'
    with open(data['path'], 'rb') as image:
        response = base64.b64encode(image.read())

    # return base64.b64decode(response)

    return response


@home_bp.route('/avatar_list', methods=('GET', 'POST'))
def avatar_list():
    sessions = DBSession()
    teachers = sessions.query(Tch).all()
    students = sessions.query(Stu).all()

    ans = {}
    for item in teachers:
        ans[item.Eng_name] = item.avatar

    for item in students:
        ans[item.Eng_name] = item.avatar
    sessions.close()
    return json.dumps(ans)


@home_bp.route("get_all_id", methods=('GET', 'POST'))
def get_all_id():
    sessions = DBSession()
    teachers = sessions.query(Tch).all()
    students = sessions.query(Stu).all()

    response = dict()
    response['accounts'] = []
    for item in teachers:
        if item.account == "xjiang@njust.edu.cn" or item.account == "songyan":
            continue
        response['accounts'].append(item.account)
    for item in students:
        if item.account == "xjiang@njust.edu.cn":
            continue
        response['accounts'].append(item.account)
    print(response)
    sessions.close()
    return json.dumps(response)


# # 请求图片
# @home_bp.route('/avatar',methods = ('GET','POST'))
# # @cross_origin()
# def avatar():
#     data = request.args
#     path = data.get('path')
#     with open(path, 'rb') as image:
#         response = base64.b64encode(image.read())

#     return response

# people界面
# @home_bp.route('/competition',methods=('GET', 'POST'))
# def competition():

# people界面
@home_bp.route('/people', methods=('GET', 'POST'))
@cross_origin()
def people():
    sessions = DBSession()
    response = dict()
    sort = eval(sessions.query(People).first().faculty)
    faculty = []
    for index in sort:
        item = sessions.query(Tch).filter(Tch.id == int(index)).first()
        info = dict()
        info['id'] = item.id
        info['name'] = item.name
        info['account'] = item.account
        info['Eng_name'] = item.Eng_name
        info['phone'] = item.phone
        info['email'] = item.email
        info['page'] = item.home_page
        info['avatar'] = item.avatar
        info['job_title'] = item.job_title
        faculty.append(info)
    response['Faculty'] = faculty
    phd = []
    allphd = sessions.query(Stu).filter(Stu.stu_classify == '博士生').all()
    for item in allphd:
        info = dict()
        info['id'] = item.id
        info['name'] = item.name
        info['account'] = item.account
        info['Eng_name'] = item.Eng_name
        info['phone'] = item.phone
        info['email'] = item.email
        info['page'] = item.home_page
        info['avatar'] = item.avatar
        phd.append(info)
    response['phD'] = phd
    Master = []
    allma = sessions.query(Stu).filter(Stu.stu_classify == '硕士生').all()
    for item in allma:
        info = dict()
        info['id'] = item.id
        info['name'] = item.name
        info['Eng_name'] = item.Eng_name
        info['account'] = item.account
        info['phone'] = item.phone
        info['email'] = item.email
        info['page'] = item.home_page
        info['avatar'] = item.avatar
        Master.append(info)
    response['Master'] = Master
    Associated_Faculty = []
    response['Associated_Faculty'] = Associated_Faculty
    sessions.close()
    return json.dumps(response, ensure_ascii=False)


# @home_bp.route('/user_page/<account>', methods=('GET', 'POST'))
# def queryByid(account):
#     sessions = DBSession()
#     response = dict()
#     print(account)
#     classify = sessions.query(Account).filter(Account.account == account).first().classify
#     if classify == '教师':
#         user = sessions.query(Tch).filter(Tch.account == account).first()
#         response['classify'] = '0'
#     else:
#         user = sessions.query(Stu).filter(Stu.account == account).first()
#         response['classify'] = '1'
#     response['status'] = 1
#     response['id'] = user.id
#     info = dict()
#     info['name'] = user.name
#     info['Eng_name'] = user.Eng_name
#     info['phone'] = user.phone
#     info['email'] = user.email
#     info['profile'] = user.profile
#     info['address'] = user.address
#     info['direction'] = user.direction
#     info['avatar'] = user.avatar
#     info['account'] = account
#     response['info'] = info
#     display = eval(user.display)
#     response['journal'] = getJn(display['jn'], eval(user.journal))
#     # response['softwareCopyright'] = display['soft']
#     # response['patent'] = display['patent']
#     # response['monograph'] = display['mono']
#     response['competition'] = getOther(display['comp'],eval(user.competition),Comp)
#     response['project'] = getOther(display['prog'],eval(user.program),Prog)
#     for item in response['project']:
#         item['start_time']=item['start_time'].strftime('%Y-%m-%d')
#         item['deadline'] = item['deadline'].strftime('%Y-%m-%d')
#     if classify == '教师':
#         response['honor'] = display['honor']
#         response['course'] = display['course']
#         response['info']['profile_c'] = user.profile_c
#         response['info']['job_title'] = user.job_title
#     sessions.close()
#     print(response)
#     return json.dumps(response, ensure_ascii=False)

@home_bp.route('/user_page/<account>', methods=('GET', 'POST'))
@cross_origin()
def queryByid(account):
    sessions = DBSession()
    response = dict()
    print(account)
    classify = sessions.query(Account).filter(Account.account == account).first().classify
    if classify == '教师':
        user = sessions.query(Tch).filter(Tch.account == account).first()
        response['classify'] = '0'
    else:
        user = sessions.query(Stu).filter(Stu.account == account).first()
        response['classify'] = '1'
    response['status'] = 1
    response['id'] = user.id
    info = dict()
    info['name'] = user.name
    info['Eng_name'] = user.Eng_name
    info['phone'] = user.phone
    info['email'] = user.email
    info['profile'] = user.profile
    info['address'] = user.address
    info['direction'] = user.direction
    info['avatar'] = user.avatar
    info['account'] = account
    response['info'] = info
    if response['classify'] == '1':
        return json.dumps(response, ensure_ascii=False)
    display = eval(user.display)
    response['journal'] = getJn(display['jn'], eval(user.journal))
    # response['softwareCopyright'] = display['soft']
    # response['patent'] = display['patent']
    # response['monograph'] = display['mono']
    response['competition'] = getOther(display['comp'], eval(user.competition), Comp)
    response['project'] = getOther(display['prog'], eval(user.program), Prog)
    for item in response['project']:
        item['start_time'] = item['start_time'].strftime('%Y-%m-%d')
        item['deadline'] = item['deadline'].strftime('%Y-%m-%d')
    if classify == '教师':
        response['honor'] = display['honor']
        response['course'] = display['course']
        response['info']['profile_c'] = user.profile_c
        response['info']['job_title'] = user.job_title
    sessions.close()
    print(response)
    return json.dumps(response, ensure_ascii=False)


# 个人主页界面
@home_bp.route('/userPage/<id>', methods=('GET', 'POST'))
@cross_origin()
def userPage(id):
    sessions = DBSession()
    account_info = sessions.query(Account).filter(Account.account == id).first()
    response = dict()
    response['status'] = 1
    if account_info == None:
        return response
    # print("account_info.classify = {}".format(account_info.classify))
    if account_info.classify in ['教师']:
        user_info = sessions.query(Tch).filter(Tch.account == id).first()
        if user_info is None:
            print("account_info = {}-{}".format(account_info.classify, account_info.account))
            return json.dumps(response, default=defaultconverter)
        response['classify'] = 0
        response['conference'] = userConference_(user_info, sessions)
        response['journal'] = userJournal(user_info, sessions)
        response['softwareCopyright'] = userSoftwareCopyright(user_info, sessions)
        response['patent'] = userPatent(user_info, sessions)
        response['monograph'] = userMonograph(user_info, sessions)
        response['honor'] = userHonor(user_info, sessions)
        response['project'] = userProject(user_info, sessions)
        response['competition'] = userCompetition(user_info, sessions)
        response['course'] = userCourse(user_info, sessions)
        response['avatar'] = user_info.avatar
        response['others'] = user_info.others
    else:
        user_info = sessions.query(Stu).filter(Stu.account == id).first()
        if user_info is None:
            print("account_info = {}-{}".format(account_info.classify, account_info.account))
            return json.dumps(response, default=defaultconverter)
        response['classify'] = 0
        response['conference'] = userConference_(user_info, sessions)
        response['journal'] = userJournal(user_info, sessions)
        response['softwareCopyright'] = userSoftwareCopyright(user_info, sessions)
        response['patent'] = userPatent(user_info, sessions)
        response['monograph'] = userMonograph(user_info, sessions)
        response['project'] = userProject(user_info, sessions)
        response['competition'] = userCompetition(user_info, sessions)
        response['avatar'] = user_info.avatar
        response['others'] = user_info.others
    sessions.close()
    return json.dumps(response, default=defaultconverter)


import markdown


# @home_bp.route('/detail_news', methods=('GET', 'POST'))
# def detail_news():
#     response = dict()
#     response['status'] = 1
#     news=[]
#     sessions = DBSession()
#     allnews=sessions.query(News).all()
#     for item in allnews:
#         content=item.content
#         print(content)
#         look=0
#         while content.find('![]',look)!=-1:
#             l = content.find('![]')
#             st = l + 4
#             end = content.find(')', st)
#             imag = content[st:end]
#             file_name = (imag.split('\\')[-1])
#             abspth = os.path.abspath(__file__)
#             path = os.path.join('./', 'static', 'picture')
#             url = os.path.join(path, file_name)
#             print("pic url {}, exist: {}".format(url, os.path.exists(url)))
#             print(os.getcwd())
#             if not os.path.exists(url):
#                 exit()
#             pic = open(url, 'rb')
#             pic_base64 = base64.b64encode(pic.read()).decode()
#             content = content[:l] + pic_base64 + content[end + 1:]
#             pic.close()
#             look=end+1
#         dic=dict()
#         dic['title']=item.title
#         dic['publisher']=item.publisher
#         dic['content']=markdown.markdown(content)
#         print(dic['content'])
#         dic['dat']=item.dat
#         dic['classify']=item.classify
#         news.append(dic)
#     response['news']=news
#     return json.dumps(response, ensure_ascii=False, default=defaultconverter)


# @home_bp.route('/detail_news', methods=('GET', 'POST'))
# def detail_news():
#     response = dict()
#     response['status'] = 1
#     news=[]
#     sessions = DBSession()
#     allnews=sessions.query(News).all()
#     for item in allnews:
#         content=item.content
#         look=0
#         # while content.find('![]',look)!=-1:
#         #     l = content.find('![]')
#         #     st = l + 4
#         #     end = content.find(')', st)
#         #     imag = content[st:end]
#         #     file_name = (imag.split('\\')[-1])
#         #     abspth = os.path.abspath(__file__)
#         #     path = os.path.join('news', 'static', 'picture')
#         #     url = os.path.join(path, file_name)
#         #     pic = open(url, 'rb')
#         #     pic_base64 = base64.b64encode(pic.read()).decode()
#         #     content = content[:l] + pic_base64 + content[end + 1:]
#         #     pic.close()
#         #     look=end+1
#         dic=dict()
#         dic['title']=item.title
#         dic['publisher']=item.publisher
#         dic['content']=markdown.markdown(content)
#         print(dic['content'])
#         dic['dat']=item.dat
#         dic['classify']=item.classify
#         news.append(dic)
#     response['news']=news
#     return json.dumps(response, ensure_ascii=False, default=defaultconverter)


@home_bp.route('/detail_news', methods=('GET', 'POST'))
@cross_origin()
def detail_news():
    response = dict()
    response['status'] = 1
    news = []
    sessions = DBSession()
    allnews = sessions.query(News).all()
    host = request.headers.get('host')
    for item in allnews:
        content = item.content
        content = content.replace("![](http://127.0.0.1:5000\\news\static\picture\\", '![](../../../static/news/')
        dic = dict()
        dic['title'] = item.title
        dic['publisher'] = item.publisher
        dic['content'] = markdown.markdown(content)
        dic['dat'] = item.dat
        dic['classify'] = item.classify
        dic['id'] = item.id
        news.append(dic)
    response['news'] = news
    sessions.close()
    return json.dumps(response, ensure_ascii=False, default=defaultconverter)


def cmp(x, y):
    if x['dat'] is None:
        return 1
    elif y['dat'] is None:
        return -1
    elif x['dat'] > y['dat']:
        return -1
    return False


@home_bp.route('/publication', methods=('GET', 'POST'))
@cross_origin()
def publications():
    response = dict()
    response['status'] = 1
    journals = Admin(Jn, 'journal').getAll()['data']
    conferences = Admin(Conf, 'conference').getAll()['data']
    journals_filter = [item for item in journals if item['bibtex'] == True and item['ccf'] == 'A区']
    conferences_filter = [item for item in conferences if item['bibtex'] == True and item['ccf'] == 'A区']
    filters = journals_filter + conferences_filter
    sorts = sorted(filters, key=functools.cmp_to_key(cmp))
    response['data'] = sorts
    print(response['data'])
    return json.dumps(response, ensure_ascii=False)

#def exportCites(ids):



# 教师会议删除
@home_bp.route('/api', methods=('GET', 'POST'))
@cross_origin()
def api():
    sessions = DBSession()
    response = []
    alltch = sessions.query(Tch).all()
    for item in alltch:
        every_response = dict()
        info = dict()
        every_response['status'] = 1
        every_response['classify'] = 0
        info['name'] = item.name
        info['Eng_name'] = item.Eng_name
        info['phone'] = item.phone
        info['email'] = item.email
        info['profile'] = item.profile
        info['address'] = item.address
        info['profile_c'] = item.profile_c
        info['direction'] = item.direction
        info['avatar'] = item.avatar
        every_response['info'] = info
        confdisplay = eval(item.display)
        # for i in range(0,len(confdisplay['jn'])):
        #     confdisplay['jn'][i]['id']=i+1
        every_response['conference'] = confdisplay['jn']
        # for i in range(0, len(confdisplay['patent'])):
        #     confdisplay['patent'][i]['id'] = i + 1
        every_response['patent'] = confdisplay['patent']
        # for i in range(0, len(confdisplay['soft'])):
        #     confdisplay['soft'][i]['id'] = i + 1
        every_response['softwareCopyright'] = confdisplay['soft']
        # for i in range(0, len(confdisplay['mono'])):
        #     confdisplay['mono'][i]['id'] = i + 1
        every_response['monograph'] = confdisplay['mono']
        # for i in range(0, len(confdisplay['honor'])):
        #     confdisplay['honor'][i]['id'] = i + 1
        every_response['honor'] = confdisplay['honor']
        # for i in range(0, len(confdisplay['prog'])):
        #     confdisplay['prog'][i]['id'] = i + 1
        every_response['project'] = confdisplay['prog']
        # for i in range(0, len(confdisplay['comp'])):
        #     confdisplay['comp'][i]['id'] = i + 1
        every_response['competition'] = confdisplay['comp']
        # for i in range(0, len(confdisplay['course'])):
        #     confdisplay['course'][i]['id'] = i + 1
        every_response['course'] = confdisplay['course']
        response.append(every_response)
    return json.dumps(response, ensure_ascii=False)


def getJn(display, info):
    res = []
    for id, author in info.items():
        id_ = id[1:]
        db_name = id[0]
        if id in display:
            db = Conf if db_name == 'c' else Jn
            item_info = Admin(db, '').getOne(int(id_))
            if item_info != {}:
                item_info['authors'] = author
                res.append(item_info)
    return res


def getOther(display, info, db):
    res = []
    for id in info:
        if id in display:
            item = Admin(db, '').getOne(int(id))
            if item != {}:
                res.append(item)
    return res


@home_bp.route('/debug', methods=('GET', 'POST'))
@cross_origin()
def debug():
    sessions = DBSession()
    teachers = sessions.query(Tch).all()
    students = sessions.query(Stu).all()
    for item in teachers:
        print("teachers conference item = {}".format(item.conference))
        print("teachers software item = {}".format(item.software))
    for item in students:
        print("students conference item = {}".format(item.conference))
        print("students software item = {}".format(item.software))
    software = sessions.query(Soft).all()
    for item in software:
        print("software item = {}".format(item))


def userConference(user_info, sessions):
    print(user_info)
    info = user_info.conference
    print(info)
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Conf).filter(Conf.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['name'] = info.name
                gain_dict['conferenceName'] = info.conferenceName
                gain_dict['dat'] = info.dat
                gain_dict['citation'] = info.citation
                gain_dict['ccf'] = info.ccf
                gain_dict['link'] = info.link
                result[i] = gain_dict  #
                i += 1
    return result


def userConference_(user_info, sessions):
    if user_info is None:
        return {}
    info = user_info.conference
    if info == None:
        return {}
    info = ast.literal_eval(info)
    gain_dict = dict()
    result = dict()
    print("info={}".format(info))
    if info is not None:
        tempList = list()
        result = list()
        for row in info:  # 将字符串转为列表
            print(row)
            tempList.append(info[row])
            result.append(row)  # id列表
        gain_info = sessions.query(Conf).filter(Conf.id.in_(result)).all()  # 成果信息
        i = 0
        for info in gain_info:  # 遍历成果信息
            gain_dict['author'] = tempList
            gain_dict['name'] = info.name
            gain_dict['conferenceName'] = info.conf_name
            gain_dict['dat'] = info.dat
            gain_dict['citation'] = info.times
            gain_dict['ccf'] = info.ccf
            gain_dict['link'] = info.link
            result[i] = gain_dict  #
            i += 1
    return result


def userJournal(user_info, sessions):
    info = user_info.journal
    if not info:
        return {}
    print("in user_info: info={} len={}".format(info, len(info)))
    print(type(info))
    print(len(info) <= 2)
    if len(info) <= 10:
        return {}
    result = dict()
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Jn).filter(Jn.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['name'] = info.name
                gain_dict['journalName'] = info.jn_name
                gain_dict['dat'] = info.dat
                gain_dict['citation'] = info.citation
                gain_dict['ccf'] = info.ccf
                gain_dict['link'] = info.link
                result[i] = gain_dict  #
                i += 1
    return result


def userSoftwareCopyright(user_info, sessions):
    info = user_info.software
    if not info:
        return {}
    print("in user_info: info={} len={}".format(info, len(info)))
    print(type(info))
    print(len(info) <= 2)
    if len(info) <= 10:
        return {}
    result = dict()
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Soft).filter(Soft.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['name'] = info.name
                gain_dict['times'] = info.times
                result[i] = gain_dict  #
                i += 1
    return result


def userPatent(user_info, sessions):
    result = dict()
    info = user_info.patent
    if not info:
        return {}
    print("in user_info: info={} len={}".format(info, len(info)))
    print(type(info))
    print(len(info) <= 2)
    if len(info) <= 10:
        return {}
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Patent).filter(Patent.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['name'] = info.name
                gain_dict['effectDat'] = info.effectDat
                result[i] = gain_dict  #
                i += 1
    return result


def userMonograph(user_info, sessions):
    info = user_info.monograph
    if not info:
        return {}
    print("in user_info: info={} len={}".format(info, len(info)))
    print(type(info))
    print(len(info) <= 2)
    if len(info) <= 10:
        return {}
    result = dict()
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Mono).filter(Mono.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['name'] = info.name
                gain_dict['dat'] = info.dat
                result[i] = gain_dict  #
                i += 1
    return result


def userHonor(user_info, sessions):
    info = user_info.honor
    if not info:
        return {}
    print("in user_info: info={} len={}".format(info, len(info)))
    print(type(info))
    print(len(info) <= 2)
    if len(info) <= 10:
        return {}
    result = dict()
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Honor).filter(Honor.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['title'] = info.title
                result[i] = gain_dict  #
                i += 1
    return result


def userProject(user_info, sessions):
    info = user_info.program
    if not info:
        return {}
    print("in user_info: info={} len={}".format(info, len(info)))
    print(type(info))
    print(len(info) <= 2)
    if len(info) <= 10:
        return {}
    result = dict()
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Prog).filter(Prog.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['name'] = info.name
                gain_dict['level'] = info.level
                gain_dict['startTime'] = info.start_time
                gain_dict['deadline'] = info.deadline
                gain_dict['cost'] = info.cost
                result[i] = gain_dict  #
                i += 1
    return result


def userCompetition(user_info, sessions):
    info = user_info.competition
    if not info:
        return {}
    print("in user_info: info={} len={}".format(info, len(info)))
    print(type(info))
    print(len(info) <= 2)
    if len(info) <= 10:
        return {}
    result = dict()
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Comp).filter(Comp.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['name'] = info.name
                gain_dict['ranking'] = info.ranking
                result[i] = gain_dict  #
                i += 1
    return result


def userCourse(user_info, sessions):
    info = user_info.course
    if not info:
        return {}
    print("in user_info: info={} len={}".format(info, len(info)))
    print(type(info))
    print(len(info) <= 2)
    if len(info) <= 10:
        return {}
    result = dict()
    if info is not None:
        if info != '[]':
            gain_list = info[1:len(info) - 2].split('},')
            tempList = list()
            result = list()
            for row in gain_list:  # 将字符串转为列表
                row += '}'
                row = ast.literal_eval(row.replace(' ', ''))
                tempList.append(row)
                result.append(row['id'])  # id列表
            gain_info = sessions.query(Course).filter(Course.id.in_(result)).all()  # 成果信息
            i = 0
            for info in gain_info:  # 遍历成果信息
                gain_dict = tempList[i]
                gain_dict['name'] = info.name
                result[i] = gain_dict  #
                i += 1
    return result

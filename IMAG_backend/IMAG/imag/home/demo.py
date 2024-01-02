from home.models import Admin
# from models import Admin
from libs.db import DBSession, Conf, Account, Jn, Patent, Honor, Prog, Course, Comp, Soft, Mono, News, Resource, Tch, \
    Stu, Gra, Issues, People

if __name__ == '__main__':
    res=Admin(Comp,'competition').getAll()['data']
    print((res))
import fetch from 'dva/fetch';
import config from './../config';

const load = {
  'Model': {
    'namespace': 'load',
  
    'state': {
      'isLoadingCompleted': false,
      'loadingErrorMessage': '错误信息',

      'gatherOrderItem': {
        // 'adultNum': 2,
        // 'belongId': 33,
        // 'calMethod': "123412",
        // 'checkIn': 1514649600000,
        // 'checkOut': 1514736000000,
        // 'childNum': 0,
        // 'confirmStatus': null,
        // 'createBy': 33,
        // 'createTime': 1512926229000,
        // 'customCode': "AAADD",
        // 'discount': 100,
        // 'email': "",
        // 'infoId': null,
        // 'insuranceBegin': null,
        // 'insuranceEnd': null,
        // 'isBX': "N",
        // 'isComplete': "N",
        // 'isConfirmed': "Y",
        // 'isLocked': "Y",
        // 'isValid': "Y",
        // 'kidsAge': "",
        // 'linkId': 192,
        // 'mobile': "",
        // 'notPayAmount': 9800,
        // 'operationStatus': 1,
        // 'orderAmount': 9900,
        // 'orderDesc': "123123",
        // 'orderName': "园景房",
        // 'orderSn': "AAADD",
        // 'orderSrc': "TB",
        // 'payAmount': 100,
        // 'payStatus': 2,
        // 'peopleNum': 2,
        // 'pinyinName': "LianJieShu",
        // 'present': "",
        // 'productAmount': 10000,
        // 'remark': null,
        // 'reservationCode': "15544554",
        // 'roomNum': 1,
        // 'serialNumber': null,
        // 'signName': "连接数",
        // 'submitTime': null,
        // 'template': 1,
        // 'transfersInfo': "",
        // 'uniqueKey': "a98afa21-3808-43d4-b2e3-522c8e4b388f",
        // 'updateBy': 29,
        // 'updateTime': 1515615162000,
        // 'userId': 106,
      },

      // 如果为 false 说明是第一次填写
      'gatherInfo': {
        // adultNum: 1,
        // attachmentList: [{
        //   attachId: 14,
        //   attachPath: "/source/image/attach/f7f2bf05-63be-41aa-8b4c-9d1f4e791229.png",
        //   attachThumb: "/source/image/attach/thum/thum_f7f2bf05-63be-41aa-8b4c-9d1f4e791229.png",
        //   attachType: "PT1",
        //   infoId: null,
        // }],
        // calMethod: "6000-500=5500",
        // checkIn: 1508428800000,
        // checkOut: 1508515200000,
        // childNum: 0,
        // discount: 500,
        // email: "123456789@qq.com",
        // flightNote: "",
        // hLandDate: null,
        // hLandTime: null,
        // hTakeoffDate: null,
        // hTakeoffTime: null,
        // inHarbourNum: null,
        // inboundNum: null,
        // infoId: 122,
        // insuranceBegin: null,
        // insuranceEnd: null,
        // isRead: "Y",
        // kidsAge: null,
        // landDate: null,
        // landTime: null,
        // mobile: "15911111111",
        // notPayAmount: 5000,
        // orderAmount: 5500,
        // orderDesc: "1间半独立沙滩木屋",
        // orderName: "半独立沙滩木屋",
        // orderSn: "2017082901",
        // orderSrc: "TB",
        // outHarbourNum: null,
        // outboundNum: null,
        // payAccount: null,
        // payAmount: 500,
        // payStatus: 2,
        // peopleNum: 1,
        // pinyinName: "Zeng Jie ",
        // present: "",
        // productAmount: 6000,
        // readTime: 1505324846000,
        // remark: null,
        // reservationCode: null,
        // resortShuttle: null,
        // roomNum: 1,
        // signName: "某某",
        // takeoffDate: null,
        // takeoffTime: null,
        // template: 1,
        // transfersInfo: "",
        // roomInfoList: [
        //   {
        //     infoId: 122,
        //     roomId: 123,
        //     bedType: "蜜月大床",
        //     iceEmail: null,
        //     iceMobile: null,
        //     iceName: null,
        //     iceRelation: null,
        //     customerInfoList: [
        //       {
        //         roomId: 123,
        //         customerId: 145,
        //         isKid: "N",
    
        //         passportNo: null,
        //         nationality: "MACAU CHINA",
        //         chineseName: "某某",
        //         pinyinName: "Zeng Jie",
        //         birthday: "1972-01-15",
        //         age: 45,
        //         gender: 1,
        //         email: "54454@qq.com",
        //         mobile: "15976713287",
        //         isDive: "N",
        //         divingCount: null,
        //         divingNo: null,
        //         divingRank: null,
        //         lastDiveTime: null,
        //         anamnesis: "无",
        //       }
        //     ]
        //   }
        // ]
      },

      // 如果为 false 说明正在加载
      'AdminInfo': false
      // {
      //   'qq': '971637111',
      //   'qrCode': '/source/image/admin/qrCode/d3299495d994.png',
      //   'nickName': '止木',
      //   'nameCard': '/source/image/admin/nameCard/bb2c60bde39f.png',
      //   'name': '葛武荣',
      //   'mobile': '18503021111',
      //   'email': 'gewurong@divingtime.asia',
      //   'webchat': '971637111',
      //   'email': '2498531111@qq.com'
      // }
    },
  
    'reducers': {

      setGather(state, data) {
        return {
          ...state,
          'isLoadingCompleted': data.isLoadingCompleted,
          'loadingErrorMessage': data.loadingErrorMessage,
          'gatherOrderItem': data.gatherOrderItem,
          'gatherInfo': data.gatherInfo
        }
      },

      setAdminInfo(state, data) {
        return {
          ...state,
          'AdminInfo': data.AdminInfo
        }
      }
    }
  },

  initGatherInfo: function (app) {
    const _this = this;

    this.getGatherInfo().then(val => {
      let gatherOrderItem = localStorage.getItem('loginSuccessful');

      if (gatherOrderItem) {
        app._store.dispatch({
          'type': 'load/setGather',
          'isLoadingCompleted': true,
          'loadingErrorMessage': '成功获取订单信息',
          'gatherOrderItem': JSON.parse(gatherOrderItem),
          'gatherInfo': val
        });

        app._store.dispatch({
          'type': 'computer/jumpToRouter',
          'router': val ? 'preview' : 'main' // 表示 (已 / 第一次) 填写信息收集
        });

        _this.getAdminInfo().then(val => app._store.dispatch({
          'type': 'load/setAdminInfo',
          'AdminInfo': val
        }));
      } else {

        //  获取 localStorage 订单信息 失败
        app._store.dispatch({
          'type': 'load/setGather',
          'isLoadingCompleted': false,
          'loadingErrorMessage': '订单信息获取有误！请您检查升级更换浏览器 或 联系客服。',
          'gatherOrderItem': false,
          'gatherInfo': false
        });
      }
    }, error => {

      //  获取 服务器 订单信息 失败
      app._store.dispatch({
        'type': 'load/setGather',
        'isLoadingCompleted': false,
        'loadingErrorMessage': error,
        'gatherOrderItem': false,
        'gatherInfo': false
      });
    });
  },

  getGatherInfo: function () {
    let uniqueKey = localStorage.getItem('_uniqueKey');
    let token = localStorage.getItem('_token');
    let digest = localStorage.getItem('_digest');

    return new Promise((resolve, reject) => {
      fetch(`${config.URLversion}/gather/link/${uniqueKey}/getGatherInfo.do`, {
        'method': 'GET',
        'headers': {
          'Content-Type': 'application/json; charset=utf-8',
          'token': token,
          'digest': digest
        }
      }).then(
        response => response.json(),
        error => reject(`向服务器发起请求用户收集信息失败, 原因: ${error}`)
      )
      .then(val => {
        if (val.result === '0') {
          resolve(val.data ? val.data : false)
        } else {
          reject(`请求服务器成功, 但是获取的用户收集信息有误! 原因:${val.message}. 请联系客服!`)
        }
      })
      .catch(error => reject(`向服务器发起请求用户收集信息失败, 原因: ${error}`));
    });
  },

  getAdminInfo: function() {
    let orderItem = JSON.parse(localStorage.getItem('loginSuccessful'));

    return new Promise((resolve, reject) => {
      fetch(`${config.URLversion}/admin/${orderItem.belongId}/getAdminInfo.do`, {
        'method': 'GET',
        'headers': { 'Content-Type': 'application/json; charset=utf-8' }
      }).then(
        response => response.json(),
        error => reject(`向服务器发起请求二维码信息失败, 原因: ${error}`)
      )
      .then(val => {
        if (val.result === '0') {
          resolve(val.data)
        } else {
          reject(`请求服务器成功, 但是获取的二维码信息有误! 原因:${val.message}. 请联系客服!`)
        }
      })
      .catch(error => reject(`向服务器发起请求二维码信息失败, 原因: ${error}`));
    });
  }
}

export default load;

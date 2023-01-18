import request from '@admin/utils/request';

export function reqGetData() {
  return request({
    method: 'POST',
    url: '/mzd/patient/qryhzbyname',
  });
}

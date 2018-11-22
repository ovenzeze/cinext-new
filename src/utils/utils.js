export default {
  /**
   * 获取对应名称的cookie
   * @param name cookie的名称
   * @returns {null} 不存在时，返回null
   */
  getCookie(name) {
    let arr = []
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg)) {
      return decodeURIComponent(arr[2])
    }
    else {
      return null
    }
  },
  /**
   * 设置cookie
   * @param name cookie的名称
   * @param value cookie的值
   * @param day cookie的过期时间
   */
  setCookie(name, value, day) {
    if (day !== 0) {     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
      const expires = day * 24 * 60 * 60 * 1000
      const date = new Date(+new Date() + expires)
      document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString();
    }
    else {
      document.cookie = name + "=" + encodeURIComponent(value)
    }
  },
  hexSha1(s) {
    return binb2hex(core_sha1(AlignSHA1(s)));
  },
  getTimestamp () {
    return parseInt(+new Date() / 1000)
  }
}
function core_sha1(blockArray) {

  let x = blockArray; // append padding
  let w = Array(80);

  let a = 1732584193;

  let b = -271733879;

  let c = -1732584194;

  let d = 271733878;

  let e = -1009589776;

  for (let i = 0; i < x.length; i += 16) // 每次处理512位 16*32
  {

    let olda = a;

    let oldb = b;

    let oldc = c;

    let oldd = d;

    let olde = e;

    for (let j = 0; j < 80; j++) // 对每个512位进行80步操作
    {

      if (j >= 16) {
        w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
      }

      else {
        w[j] = x[i + j];
      }

      let t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));

      e = d;

      d = c;

      c = rol(b, 30);

      b = a;

      a = t;

    }

    a = safe_add(a, olda);

    b = safe_add(b, oldb);

    c = safe_add(c, oldc);

    d = safe_add(d, oldd);

    e = safe_add(e, olde);

  }

  return [a, b, c, d, e];

}
function sha1_ft(t, b, c, d) {

  if (t < 20)
    return (b & c) | ((~b) & d);

  if (t < 40)
    return b ^ c ^ d;

  if (t < 60)
    return (b & c) | (b & d) | (c & d);

  return b ^ c ^ d; // t<80
}
function sha1_kt(t) {

  return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;

}
function safe_add(x, y) {

  let lsw = (x & 0xFFFF) + (y & 0xFFFF);

  let msw = (x >> 16) + (y >> 16) + (lsw >> 16);

  return (msw << 16) | (lsw & 0xFFFF);

}
function rol(num, cnt) {

  return (num << cnt) | (num >>> (32 - cnt));

}
function AlignSHA1(str) {

  let nblk = ((str.length + 8) >> 6) + 1,
    blks = new Array(nblk * 16);

  for (var i = 0; i < nblk * 16; i++)
    blks[i] = 0;

  for (i = 0; i < str.length; i++)

    blks[i >> 2] |= str.charCodeAt(i) << (24 - (i & 3) * 8);

  blks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);

  blks[nblk * 16 - 1] = str.length * 8;

  return blks;

}
function binb2hex(binarray) {
  /* hex output format. 0 - lowercase; 1 - uppercase */
  let hex_tab = 0 ? "0123456789ABCDEF" : "0123456789abcdef";

  let str = "";

  for (let i = 0; i < binarray.length * 4; i++) {

    str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +

      hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);

  }

  return str;

}

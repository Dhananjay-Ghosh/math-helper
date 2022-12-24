// 1. finding HCF of two numbers
function gcd(a, b) {
    if (b == 0)
        return a
    else
        return gcd(b, a % b)
}

// 2. finding LCM of two numbers
function lcm(a, b) {
    return (a / gcd(a, b)) * b
}

// 3. last bit of a number
function lastbit(res) {
    for (let i = 0; i < 65; i++) {
        num = Math.pow(2, i);
        if ((res ^ num) == 0)
            return res;
        else if ((res & num) == num)
            res = res ^ num;
    }
    return res;
}

// 4. set-bit, get-bit of a number
function BitMask(pos) {
    BM = 1 << pos;
    return BM;
}

function getbit(num, pos) {
    result = BitMask(pos) & num
    if (result != 0)
        return true;
    else
        return false;
}

function getval(num, pos) {
    result = BitMask(pos) & num;
    return result;
}

function setbit(num, pos) {
    result = BitMask(pos) | num;
    return result;
}

// 5. nCr
function nCr(n, i) {
    maxi = Math.max(i, n - i);
    res = 1;
    a = 1;
    for (let j = maxi + 1; j <= n; j++) {
        res = (res * j) / a;
        a = a + 1;
    }
    return res;
}

// 6. nPr
function nPr(n, i) {
    res = nCr(n, i);
    for (let j = 1; j <= i; j++) {
        res = (res * j);
    }
    return res;
}

// 7. XOR Calculate
function xor(a, b) {
    return a ^ b;
}


// nCr
// let btn1 = document.getElementById('v1').value;
// let btn2 = document.getElementById('v1').value;
// document.getElementById('xor').onclick
// document.getElementById('v3').value = xor(btn1,btn2);
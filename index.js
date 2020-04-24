// Q.1
function add_two_digits(n) {
    return n % 10 + Math.floor(n / 10);
}

// Q.2
function angle_Type(angle) {
    if (angle < 90) {
        return "Acute angle.";
    }
    if (angle === 90) {
        return "Right angle.";
    }
    if (angle < 180) {
        return "Obtuse angle.";
    }
    return "Straight angle.";
}

// Q.3
function checking_numbers(x, y, divisor) {
    if (x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !== 0) {
        return true;
    }
    return false;
}

// Q.4
function swap(array) {
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    return array;
}

// Q.5
function truncate_string(str1, length) {

    if ((str1.constructor === String) && (length > 0)) {
        return str1.slice(0, length);
    }
};

// Q.6
function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

// Q.7
function insert(main_string, ins_string, pos) {
    if (typeof (pos) == "undefined") {
        pos = 0;
    }
    if (typeof (ins_string) == "undefined") {
        ins_string = '';
    }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}

// Q.8
function alphabetize_string(str) {

    return str.split('').sort().join('').trim();

}

// Q.9
function most_frequent_item(arr) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr[i];
            }
        }
        m = 0;
    }
    return item + " ( " + mf + " times )";
}

// Q.10
function custom_sort(arr) {
    var sortedArr = [];
    var min = arr[0];
    var pos;
    var max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
    }

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] != "x") {
                if (min > arr[j]) {
                    min = arr[j];
                    pos = j;
                }
            }
        }
        sortedArr[i] = min;
        arr[pos] = "x";
        min = max;
    }
    return sortedArr;

}

// Q.11
function removeDuplicates(arr) {
    var tmp = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            if (tmp.indexOf(arr[i].toLowerCase()) == -1) {
                tmp.push(arr[i]);
            }
        }
        else if (tmp.indexOf(arr[i]) == -1) {
            tmp.push(arr[i]);
        }
    }
    return tmp.sort();
}

// Q.12
function flatten(arr) {
    var strArr = arr.toString().split(',');
    var res = []
    for (var i = 0; i < strArr.length; i++) {
        res[i] = Number(strArr[i]);
    }
    return 'Flattened array =>', res
}

module.exports = {
    add_two_digits,
    angle_Type,
    checking_numbers,
    swap,
    truncate_string,
    capitalize_Words,
    insert,
    alphabetize_string,
    most_frequent_item,
    custom_sort,
    removeDuplicates,
    flatten
}


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createList(arr) {
    let node = new ListNode();
    const head = node;
    for (let i = 0; i < arr.length; i++) {
        node.next = new ListNode(arr[i])
        node = node.next
    }
    return head.next
}

function transferList(list) {
    let ret = ''
    while (list) {
        ret += list.next ? list.val + '->' : list.val
        list = list.next
    }
    console.log(ret)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode()
    let ret = head; // 记录一下头指针位置

    while (l1 || l2) {
        if (!l1) {
            head.next = l2
            break
        }
        if (!l2) {
            head.next = l1
            break
        }
        if (l1.val < l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2
            l2 = l2.next
        }
        head = head.next
    }
    return ret.next
};
let arr1 = [1, 2, 4], arr2 = [1, 3, 4]
const l1 = createList(arr1);
const l2 = createList(arr2)
let res = mergeTwoLists(l1, l2)
transferList(res)

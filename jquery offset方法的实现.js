// 通过递归实现
const offset = ele => {
    let result = {
        let: 0,
        top: 0
    }

    const getOffset = (node, init) => {
        if (node.nodeType !== 1) {
            return;
        }

        // 返回元素的position的值
        position = window.getComputedStyle(node)['position']

        if (position === 'static' && typeof init === undefined) {
            // 继续循环父节点
            getOffset(node.parentNode);
            return;
        }
        // node.offsetTop 加上 result.offsetTop 减去 node自己本身滚动的高度
        result.top = node.offsetTop + result.offsetTop - node.scrollTop;
        result.left = node.offsetLeft + result.offsetLeft - node.scrollLeft;

        if (position === 'fixed') {
            return
        }

        // 继续循环父节点
        getOffset(node.parentNode);
    }

    // 当前满足display === 'none'时 直接返回 {top: 0; left: 0;};
    if (window.getComputedStyle(ele)['position'] === 'none') {
        return result;
    }

    let position;
    getOffset(ele, true);

    return result;
}
export const groupList = function(e, array) {
    const arr = array
    let groupArr

    if (e === 0) {
        groupArr = arr.filter((item) => {
            if (item.group === 'vegetable') {
                return item;
            }
        })
    } else if (e === 1) {
        groupArr = arr.filter((item) => {
            if (item.group === 'fruit') {
                return item;
            }
        })
    } else if (e === 2) {
        groupArr = arr.filter((item) => {
            if (item.group === 'meat') {
                return item;
            }
        })
    } else if (e === 3) {
        groupArr = arr.filter((item) => {
            if (item.group === 'bakery') {
                return item;
            }
        })
    } else if (e === -1) {
        groupArr = arr;
    }

    return groupArr;
}

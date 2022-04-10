export const sortList = function(e, array) {
    const arr = array
    if (e === 0) {
        arr.sort((a, b) => {
            return a.price - b.price
        });
    } else if (e === 1) {
        arr.sort((a, b) => {
            return b.price - a.price
        });
    } else if (e === 2) {
        arr.sort((a, b) => {
            const x = a.title.toLowerCase();
            const y = b.title.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    } else if (e === 3) {
        arr.sort((a, b) => {
            const x = a.title.toLowerCase();
            const y = b.title.toLowerCase();
            if (x > y) {
                return -1;
            }
            if (x < y) {
                return 1;
            }
            return 0;
        });
    }
    return arr;
}

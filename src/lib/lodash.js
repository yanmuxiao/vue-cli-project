import orderBy from 'lodash/orderBy'
import size from 'lodash/size' // 可计算{}、[]、string的长度
// 从一个数组中取出不包含另外一个数组中的
import difference from 'lodash/difference' // 值唯一
import differenceBy from 'lodash/differenceBy' // obj中的某个键值不同（第三个参数出入某个键）
import differenceWith from 'lodash/differenceWith' // 传入方法（第三个参数是一个方法，传入了两个参数）
// 在一个数组内找唯一的
import uniq from 'lodash/uniq' // 值唯一
import uniqBy from 'lodash/uniqBy' // obj中的某个键值唯一（第二个参数出入某个键）
import uniqWith from 'lodash/uniqWith' // 传入方法（第二个参数是一个方法，传入了一个参数）

export default {
    orderBy, size,
    difference, differenceBy, differenceWith, 
    uniq, uniqBy, uniqWith
}
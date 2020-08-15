/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (31.09%)
 * Likes:    317
 * Dislikes: 0
 * Total Accepted:    41.1K
 * Total Submissions: 130.5K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入：
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * 输出：[]
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (s.length == 0 || words.length == 0) return []
    const map = {}
    let mapcnt = 0
    words.forEach(item => {
        if (map[item]) {
            map[item]++
        } else {
            map[item] = 1
            mapcnt++
        }
    })
    let il = words[0].length
    let res = []
    for (let i = 0; i < s.length - il*words.length + 1; i++) {
        let j = i+il*words.length
        let tempMap = {}
        let tempcnt = 0
        for (let k = i; k < j; k+=il) {
            let tempStr = s.substr(k,il)
            let tempstrcnt = tempMap[tempStr]
            tempMap[tempStr] = tempstrcnt?(tempstrcnt+1):1
            if(tempMap[tempStr] == map[tempStr]) {
                tempcnt ++;
            }
        }
        if (tempcnt == mapcnt) {
            res.push(i)
        }
        
    }
    return res

};

// @lc code=end


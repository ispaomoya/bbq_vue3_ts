/**
 * 测试
 */
export const test = () => { }
/**
 * 判断是否是移动端
 * @returns {Boolean}
 */
 export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

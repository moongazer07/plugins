/**
 * @name friend-troller
 * @version 19.8.7
 * @description troll your friends with this plugin
 * @author μmoongazer07#1200
 * @authorId 565892085178433542
 * @source https://github.com/moongazer07/friend-troller
 * @website https://moongazer07.zedekhost.com/
 * @updateurl https://raw.githubusercontent.com/moongazer07/friend-troller/main/friend-troller.plugin.js
 */

module.exports = class {
  getName() {
    return 'friend-troller'
  }

  getAuthor() {
    return 'µmoongazer07#1200'
  }

  getVersion() {
    return '1.0.0'
  }

  getDescription() {
    return 'A Better Discord plugin that trolls whenever you or your friends start the Discord client.'
  }

  start() {
    document.getElementsByClassName('app-2rEoOp')[0].style.display = 'none'
    var rickrollspan = document.createElement('span')
    rickrollspan.id = 'rickroll'
    rickrollspan.innerHTML = '<video id="rickroll-video" style="width:100%;height:calc(100vh - 3em);" src="https://moongazer07.zedekhost.com/friend-troller/hello.mp4" controls autoplay></video><br /><div style="text-align:center;"><a href="#" onclick="document.getElementById(\'rickroll\').remove();document.getElementsByClassName(\'app-2rEoOp\')[0].style.display = \'flex\'">Take me back to Discord!</a></div>'
    document.getElementsByClassName('app-1q1i1E')[0].appendChild(rickrollspan)

    var rickrollscript = document.createElement('script')
    rickrollscript.innerText = `document.getElementById('rickroll-video').onended = () => { document.getElementById('rickroll').remove(); document.getElementsByClassName('app-2rEoOp')[0].style.display = 'flex' }`
    document.getElementsByClassName('app-1q1i1E')[0].appendChild(rickrollscript)
  }

  stop() {
    document.getElementById('rickroll')?.remove()
    document.getElementsByClassName('app-2rEoOp')[0].style.display = 'flex'
  }
}

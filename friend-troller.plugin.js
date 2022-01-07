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

@cc_on
@if (@_jscript)
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    shell.Popup("It looks like you deeztakenly tried to run me deezrectly. \\n(Don't deez that!)", 0, "I'm a plugin for Betterdeezcord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already deeztalled", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDeezcord plugins folder.\\Are you sure it's even deeztalled?", 0, "Can't deeztall myself", 0x10);
    } else if (shell.Popup("Should I copy thyself to BetterDeezcord's plugins folder for you?", 0, "Deez you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("deeztalled!", 0, "Successfully deeztalled", 0x40);
    }
    WScript.Quit();
@else @*/

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
@end

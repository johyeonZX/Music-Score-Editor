/*! *****************************************************************************
Copyright @ 2012-2019, Kingsoft office,All rights reserved.


Redistribution and use in source and binary forms ,without modification and selling solely, are permitted provided that the following conditions are met:

1.Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2.Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3.Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

SPECIAL NOTE:THIS SOFTWARE IS NOT PERMITTED TO BE MODIFIED OR SOLD SOLELY AT ANY TIME AND UNDER ANY CIRCUMSTANCES, EXCEPT WITH THE WRITTEN PERMISSION OF KINGSOFT OFFICE


THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
***************************************************************************** */

/// <reference path="lib.kso.d.ts" />
/// <reference path="lib.wps.d.ts" />
/// <reference path="lib.et.d.ts" />
/// <reference path="lib.wpp.d.ts" />

declare namespace wps {

    /**
     * wps文字的Application对象
     */
    export function WpsApplication(): Wps.WpsApplication;

    /**
     * wps表格的Application对象
     */
    export function EtApplication(): Et.EtApplication;

    /**
     * wps演示的Application对象
     */
    export function WppApplication(): Wpp.WppApplication;

    /**
     * 用于对ribbon界面进行更新
     * @param id
     */
    export function UpdateRibbon(id?: number): void;

    /**
     * 弹出对话框
     * @param url html文件的路径
     * @param title 对话框标题
     * @param width 对话框宽度
     * @param height 对话框高度
     * @param isModal 是否模态
     */
    export function ShowDialog(url: string, title?: string, width?: number, height?: number, isModal?: boolean): void;

    /**
     * ApiEvent对象提供Office事件回调相关的服务
     */
    export namespace ApiEvent {
        //export function AddApiEventListener(eventName: 'AfterLogin', callback: Function): void;
        //export function AddApiEventListener(eventName: 'AfterLogout', callback: Function): void;
        //export function AddApiEventListener(eventName: 'AfterWebExtensionDataRangeChange', callback: Function): void;
        
        export function AddApiEventListener(WpsEventName: 'DocumentOpen', callback: (Document: object) => void): void;
        export function AddApiEventListener(WpsEventName: 'DocumentBeforeClose', callback: (Document: object) => void): void;
        export function AddApiEventListener(WpsEventName: 'DocumentBeforeSave', callback: (Document: object) => void): void;
        export function AddApiEventListener(WpsEventName: 'WindowActivate', callback: (Document: object, Window:object) => void): void;
        export function AddApiEventListener(WpsEventName: 'WindowDeactivate', callback: (Document: object, Window:object) => void): void;
        export function AddApiEventListener(WpsEventName: 'DocumentAfterClose', callback: (Document: object) => void): void;
        export function AddApiEventListener(WpsEventName: 'WindowSelectionChange', callback: (Selection: object) => void): void;
        export function AddApiEventListener(WpsEventName: 'SelectionAfterStyleChange', callback: (Selection: object) => void): void;

        export function AddApiEventListener(EtEventName: 'WorkbookOpen', callback: (Workbook: object) => void): void;
        export function AddApiEventListener(EtEventName: 'NewWorkbook', callback: (Workbook: object) => void): void;
        export function AddApiEventListener(EtEventName: 'WorkbookBeforeSave', callback: (Workbook: object) => void): void;
        export function AddApiEventListener(EtEventName: 'WorkbookAfterSave', callback: (Workbook: object) => void): void;
        export function AddApiEventListener(EtEventName: 'WorkbookBeforeClose', callback: (Workbook: object) => void): void;
        export function AddApiEventListener(EtEventName: 'SheetSelectionChange', callback: (WorkSheet: object, Range:object) => void): void;
        export function AddApiEventListener(EtEventName: 'SheetChange', callback: (WorkSheet: object, Range:object) => void): void;
        export function AddApiEventListener(EtEventName: 'SheetActivate', callback: (WorkSheet: object) => void): void;
        export function AddApiEventListener(EtEventName: 'WindowActivate', callback: (Workbook: object, Window:object) => void): void;
        export function AddApiEventListener(EtEventName: 'WindowDeactivate', callback: (Workbook: object, Window:object) => void): void;

        export function AddApiEventListener(WppEventName: 'NewPresentation', callback: (Presentation: object) => void): void;
        export function AddApiEventListener(WppEventName: 'PresentationOpen', callback: (Presentation: object) => void): void;
        export function AddApiEventListener(WppEventName: 'PresentationBeforeClose', callback: (Presentation: object) => void): void;
        export function AddApiEventListener(WppEventName: 'PresentationBeforeSave', callback: (Presentation: object) => void): void;
        export function AddApiEventListener(WppEventName: 'PresentationSave', callback: (Presentation: object) => void): void;
        /**
         * 如果事件是询问型事件，用这个属性来控制对wps的应答
         */
        export let Cancel: boolean;

        export function RemoveApiEventListener(eventName: 'AfterLogin'): void;
        export function RemoveApiEventListener(eventName: 'AfterLogout'): void;
        export function RemoveApiEventListener(eventName: 'AfterWebExtensionDataRangeChange'): void;
        
        export function RemoveApiEventListener(WpsEventName: 'DocumentOpen'): void;
        export function RemoveApiEventListener(WpsEventName: 'DocumentBeforeClose'): void;
        export function RemoveApiEventListener(WpsEventName: 'DocumentBeforeSave'): void;
        export function RemoveApiEventListener(WpsEventName: 'WindowActivate'): void;
        export function RemoveApiEventListener(WpsEventName: 'WindowDeactivate'): void;
        export function RemoveApiEventListener(WpsEventName: 'DocumentAfterClose'): void;
        export function RemoveApiEventListener(WpsEventName: 'WindowSelectionChange'): void;
        export function RemoveApiEventListener(WpsEventName: 'SelectionAfterStyleChange'): void;

        export function RemoveApiEventListener(EtEventName: 'WorkbookOpen'): void;
        export function RemoveApiEventListener(EtEventName: 'NewWorkbook'): void;
        export function RemoveApiEventListener(EtEventName: 'WorkbookBeforeSave'): void;
        export function RemoveApiEventListener(EtEventName: 'WorkbookAfterSave'): void;
        export function RemoveApiEventListener(EtEventName: 'WorkbookBeforeClose'): void;
        export function RemoveApiEventListener(EtEventName: 'SheetSelectionChange'): void;
        export function RemoveApiEventListener(EtEventName: 'SheetChange'): void;
        export function RemoveApiEventListener(EtEventName: 'SheetActivate'): void;
        export function RemoveApiEventListener(EtEventName: 'WindowActivate'): void;
        export function RemoveApiEventListener(EtEventName: 'WindowDeactivate'): void;

        export function RemoveApiEventListener(WppEventName: 'NewPresentation'): void;
        export function RemoveApiEventListener(WppEventName: 'PresentationOpen'): void;
        export function RemoveApiEventListener(WppEventName: 'PresentationBeforeClose'): void;
        export function RemoveApiEventListener(WppEventName: 'PresentationBeforeSave'): void;
        export function RemoveApiEventListener(WppEventName: 'PresentationSave'): void;
    }

    /**
     * 创建一个taskpane对象
     * 创建完这个taskpane后，需要将Visible属性置为true, 即可显示出来
     * @param url 需要加载的网页的url
     * @param title 任务窗格的标题，此参数可选
     */
    export function CreateTaskPane(url: string, title: string): CustomTaskpane;

    interface CustomTaskpane extends Wps.WpsTaskPane {
        /**
         * 删除一个创建好的TaskPane
         */
        Delete(): void;
        /**
         * TaskPane 对象的固定位置
         */
        DockPosition: Kso.KsoMsoCTPDockPosition;
        Height: number;
        ID: number;
        /**
         * 让TaskPane显示URL对应的网页内容
         * @param url url
         */
        Navigate(url: string): void;
        Width: number;
    }

    export namespace Env {
        /**
         * 获取本机%TEMP%目录路径
         */
        export function GetTempPath(): string;
        /**
         * 获取本机根目录路径
         */
        export function GetRootPath(): string;
        /**
         * 获取本机用户home目录路径
         */
        export function GetHomePath(): string;
        /**
         * 获取本机%APPDATA%目录路径
         */
        export function GetAppDataPath(): string;
        /**
         * 获取本机%ProgramFiles%目录路径
         */
        export function GetProgramFilesPath(): string;
        /**
         * 获取本机%ALLUSERSPROFILE%目录路径
         */
        export function GetProgramDataPath(): string;
    }

    /**
     * 此函数已废弃，不要再使用
     * @param funcname 方法名称
     *
     * @deprecated This function is deprecated.
     */
    export function ExecFunc(funcname: string);

    /**
     * FileSystem
     */
    export namespace FileSystem {
        /**
         * AppendFile
         * @param path path
         */
        export function AppendFile(path: string): void;
        /**
         * 判断文件是否存在
         * @param path path
         */
        export function Exists(path: string): boolean;
        /**
         * 创建文件夹
         * @param path path
         */
        export function Mkdir(path: string): void;
        /**
         * 读取文件
         * @param path path
         */
        export function ReadFile(path: string): string; // todo 返回值需要确定
        /**
         * 删除文件
         * @param path path
         */
        export function Remove(path: string): void;
        // export function WriteFile(path: string, data: string): void; // todo 传参和返回值需要确定
    }

    /**
     * 根据taskpane的ID来取到之前创建的taskpane
     * @param id id
     */
    export function GetTaskPane(id: number): CustomTaskpane;

    /**
     * OAAsist对象是为OA助手扩展的js对象
     */
    export namespace OAAssist {
        /**
         * 从远程下载一个文件到本地
         * 第一个参数为下载地址
         * 第二、第三个参数可选，分别为下载成功和失败的回调函数名称
         * 没有指定时同步调用，并返回下载到本地的文件绝对路径，失败返回空
         * 指定后异步下载，下载完成后调用回调函数，传入封装返回值的JSON数据
         * @param url url
         */
        export function DownloadFile(url: string): string;
        export function DownloadFile(url: string, onSuccess?: Function, onFail?: Function): void;
        /**
         * 上传一个文件到远程服务器
         * @param name 上传后的文件名称
         * @param path 文件绝对路径
         * @param url 上传地址
         * @param field 请求中name的值
         * @param onSuccess 下载成功的回调函数
         * @param onFail 下载失败的回调函数
         */
        export function UploadFile(name: string, path: string, url: string, field: string, onSuccess: Function, onFail: Function): void;
        /**
         * 执行一个本地程序，或者从浏览器打开一个网页等，类似于winapi的ShellExecute函数的功能
         * @param file 文件名称
         * @param params 执行参数
         */
        export function ShellExecute(file: string, params: any): void; // todo params?

        /**
         * 向业务系统发送消息
         * @param msgText 消息的内容
         * @param bForce 当业务系统关闭后，消息是否会被缓存，被缓存的消息一定会被送达，等业务系统下次启动时会接收缓存的消息
         */
        export function WebNotify(msgText: string, bForce?: boolean): void; 
    }

    /**
     * PluginStorage对象
     * 每个wps加载项都有一个不同网页间共享的PluginStorage对象
     * 通过该对象可以在同一个插件的不同网页间来传递数据
     * 例如可以在对话框的网页中存入一个数据，然后在TaskPane所在的网页中取到这个数据
     */
    export namespace PluginStorage {
        /**
         * 往容器中存入一个数据
         * @param key key
         * @param value value
         */
        export function setItem(key: string, value: number | boolean | string): void;
        /**
         * 根据指定的key得到对应的value
         * @param key key
         */
        export function getItem(key: string): string;
        /**
         * 删除key对应的value
         * @param key key
         */
        export function removeItem(key: string): void;
        /**
         * 清除所有的数据
         */
        export function clear(): void;
        /**
         * 返回第idx个位置对应的key
         * @param idx idx
         */
        export function key(idx: number): string;
        /**
         * 容器中的数据条数
         */
        export const length: number;
    }

    /**
     * TabPages
     */
    export namespace TabPages {
        /**
         * 增加一个url页面的TabPage
         * @param url url
         */
        export function Add(url: string): TabPage;
        /**
         * 获取第id个TabPage
         * @param id id
         */
        export function Item(id: number): TabPage;
        /**
         * TabPage的总数
         */
        export const Count: number;
        /**
         * 跳转到新的文档Tab页
         */
        export function GotoNewDocTab(): number;
    }

    interface TabPage {
        /**
         * 更新TabPage的页面，参数为新页面的url
         * @param url url
         */
        Navigate(url: string): void;
        /**
         * 关闭TabPage的页面
         */
        Close(): void;
    }

    /**
     此函数已废弃，不要再使用
     * @param id 
     *
     * @deprecated This function is deprecated.
     */
    export function UpdateRibbon(id?: number): void;

    export namespace WPSCloudService {
        /**
         * 调用wps云服务登录
         */
        export function Login(): void;
        /**
         * 调用wps云服务登出
         */
        export function Logout(): void;
        /**
         * 获取wps云服务用户信息
         */
        export const UserInfo: string;
    }


}

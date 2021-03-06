#汝来票务系统
##微信端（用户使用）
###一、功能简介：
	微信端主要实现查看演出场次、场馆信息、购买演出券、选座位、微信支付功能。
  
###二、技术选型
- SUI 框架 (包括：SUI 省市区组件)
- js库：zepto、jquery 
- 插件：jquery-seat-charts (实现座位选取)
- Handlebars 模板引擎

###三、文件结构 
- **css**(包含所有css样式)
- **images**(包含所有图片)
- **js**(所有模块js，包括引入的插件js)
- **modules**(所有功能模块页面)
- index.html(微信主页面)

###四、系统功能模块（只有页面）
1. action （活动模块）
- **actionDetail** 显示所有的活动信息
- **chooseCoupon** 购买优惠券
- **chooseSeat** 选择座位
- **couponCode** 添加优惠券
- **indent** 订单详情
- **orderSuccess** （页面没用上）
2. address （地址模块）
- **addAddress** 添加地址
- **myAddress** 我的收货地址
3. collection （我的收藏模块，未做）
4. order （订单模块）
- **coupon** 我已购买的优惠券
- **myOrder** 我的订单信息
- **ticket** 我已购买的演出座位票
5. stadium （场馆模块）
- **stadiumDetail** 场馆信息

###五、业务逻辑 （main.js--详细内容请查看代码注解）
 *由于时间原因，未仔细研究SUI框架，所有将所有的js逻辑都写在main.js里*
- **页面加载** SUI通过路由进行页面加载， $.init()执行初始化方法。调用 $.initPage 方法初始化页面组件，并且触发一个 pageInit 事件，并执行回调函数，函数包括三个参数（event，pageId，$page）通过pageId来加载相应的事件跟页面渲染，所以请确保在所有的 pageInit 事件绑定之后再调用 $.init() 方法。
- **main对象** （主页模块，微信页面初始化请求、加载的数据）
- **stadium对象** （场馆模块，查看场馆新消息）
- **action对象** （活动模块，包括微信支付、购买优惠券、在线选座、查看演出活动信息，添加优惠券等）
- **address** （地址模块，添加、查看收货地址）
- **order** （订单模块，查看已成交的订单、已购买的优惠券、已购买的座位票）

###六、使用指南
- 关注微信公众号“汝来”，点击“首页”，查看四个菜单（推荐、活动、场馆、我的）
- “推荐”显示最新添加的活动，“活动”按添加时间排序（最新添加在最上面），“场馆”只能查看场馆基本信息，“我的”里面包括查看我已完成的订单、我已购买的座位票、我已购买的优惠券、我的收货地址
- 选择任意活动，显示活动信息（包括场次信息），可以购买优惠券或座位票
- 购买优惠券：先选择场次，再选择区域（优惠券是场次通用，活动不通用。区域不同，价格不同，仅用来在购买座位时，抵扣对应面额的费用）可以购买不同区域的优惠券
- 选择座位：先选择场次，再选择区域（选择空座位进行购买）不可以购买不同区域的座位
- 确定订单：目前只支持微信以及优惠券付款（总金额小于优惠券时，不退多出的部分）优惠券需要自己手动添加
- 查看已购买座位票：一个座位一个二维码，进场时验证二维码数据
- 收货地址：后期开发“赠送礼品”功能时使用

----

##PC端（管理员使用）
###一、功能介绍
	PC端主要实现场馆、活动以及活动场次添加、区域管理，查看已支付订单，发布优惠券，用户购买的优惠券，以及关注公众号的用户。
  
###二、技术选型
- 系统采取单页面应用（*single page application*）模式。
- 前端模块加载方式使用异步加载（*AMD*）规范的 *Require.js* 。 
- 前端开发架构采用MVC模式的 *Backbone.js*。
- UI框架采用 *bootstrap *。
- 插件*bootstrapTable*和*chosen*。
- 系统整体采用前后端分离的 *Restful*架构，前端向后端发起的请求均为 *ajax*请求。

### 三、 文件结构
- **css** (包含项目所有css文件）
- **img**（包含项目所有的图片）
- **js**（包含项目所有js文件）
	- **libs**（包含项目引入的基础包，如jquery，backbone，bootstrap，bootstrapTable，chosen，requirejs）
	- **modules**（包含系统子功能的文件夹，子文件夹对应菜单）
	- config.js （全局配置文件，预留，没有实际逻辑）
	- main.js（require.js设置的主文件）
	- router.js （backbone路由设置文件，包含页面通用逻辑）
	- login.js  （登录页面逻辑）
- index.html（主页面，所有路由导向的页面只是更新这个页面）
- login.html（登录页面 ）

### 四、 router.js和main.js中的全局逻辑
- **router.js** 中除了设置路由，跳转页面逻辑以外，还设置了每个页面公用的逻辑：
	-  ajax全局设置，error回调，timeout超时。
	- 修改菜单状态
- **main.js** 中除了定义文件路径以外，还设置了页面初次载入的逻辑：
	- 开启路由。
	window.router = new Router();  Backbone.history.start();
	- 禁用点击backspace事件，防止引发的意外浏览器回退现象。
  
###五、系统功能模块（具体功能看代码注释）
1. **coupon模块** （优惠券模块） 
- **couponList**（用户购买的优惠券）
- **couponPublish** （发布的优惠券）
2. **dataManager模块** （已支付的订单）
3. **show模块**（活动模块）
- **showArea** （活动区域）
- **showList** （活动列表）
4. **stadium模块**（场馆模块）
- **stadiumIntroduce**(添加场馆信息)
- **stadiumManager** (场馆列表)
5. **user模块**（用户模块）
- **userList**（关注公众号的用户）

###六、使用指南
- 管理员登录账号由我们提供，没有注册页面
- “新增场馆”，输入场馆信息，保存
- “场馆列表”，查询已经添加的所有场馆，并对场馆状态进行操作，若显示“禁用”，则该场馆状态为“启用”。如该场馆已经安排活动、场次。更改场馆状态会导致一系列问题。慎重修改场馆状态。
- “演出列表”，可添加演出、增加演出场次（在此设置区域价格）、查看演出场次（可停用演出场次）
- “区域管理”，根据演出来查询区域（并对区域状态进行修改），可添加区域（_后添加的区域不会出现在已经设置价格的场次里面_）可根据实际座位图对区域进行设置（但只能编辑一次）
- “已支付的订单”，根据演出、场次来查询已经售出的座位票
- “发布优惠券”，此功能用于生成优惠券，用于赠送别人
- “用户优惠券”，用户购买的优惠券
- “用户列表”，已经关注公众号的用户

define(["txt!../../Show/showScreen/showScreen.html","../../Show/showScreen/showScreenModel","../../Show/showList/showListModel","backbone"],function(e,t,o,s){var i=s.View.extend({initialize:function(){this.showScreenModel=new t,this.showListModel=new o,this.listenTo(this.showListModel,"getShowListResult",this.getShowListResult),this.listenTo(this.showScreenModel,"getShowInfoResult",this.getShowInfoResult),this.listenTo(this.showScreenModel,"arrangeResult",this.arrangeResult)},render:function(){var t=$(this.el);return t.html(e),t.find(".range_table").bootstrapTable({columns:[{field:"perform_date",title:"演出时间",formatter:function(e){return e.replace(/[tz]/gi," ")}}],data:[],pagination:!0,pageSize:10}),this.showListModel.getShowList(),this},getShowListResult:function(e){if(0==e.errorNo){for(var t=e.data,o="",s=0;s<t.length;s++)o+="<option value='"+t[s].pk+"'>"+t[s].name+"</option>";$(".show_list").html(o)}else alert(e.errorInfo)},events:{"click .check_show":"checkShow","click .refresh_list":"refreshList","click .save_time":"rangeTime"},refreshList:function(){this.showListModel.getShowList()},checkShow:function(){var e={action:$(".show_list :selected").val()};this.showScreenModel.getShowInfo(e)},getShowInfoResult:function(e){0==e.errorNo?($(".range_table").bootstrapTable("load",e.data),$("#timeModal").modal("hide"),$("#timeModal input").val("")):alert(e.errorInfo)},rangeTime:function(){var e={action:$(".show_list :selected").val(),perform_date:$(".range_time").val().replace("T"," ")+":00"};this.showScreenModel.savearrange(e)},arrangeResult:function(e){0==e.errorNo?this.checkShow():alert(e.errorInfo)}});return i});
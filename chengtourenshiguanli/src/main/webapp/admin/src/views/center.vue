<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工编号' prop="yuangongUuidNumber">
               <el-input v-model="ruleForm.yuangongUuidNumber"  placeholder='员工编号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工姓名' prop="yuangongName">
               <el-input v-model="ruleForm.yuangongName"  placeholder='员工姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工手机号' prop="yuangongPhone">
               <el-input v-model="ruleForm.yuangongPhone"  placeholder='员工手机号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工身份证号' prop="yuangongIdNumber">
               <el-input v-model="ruleForm.yuangongIdNumber"  placeholder='员工身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'" label='员工头像' prop="yuangongPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.yuangongPhoto?ruleForm.yuangongPhoto:''"
                         @change="yuangongPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='电子邮箱' prop="yuangongEmail">
               <el-input v-model="ruleForm.yuangongEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='部门' prop="bumenTypes">
                 <el-select v-model="ruleForm.bumenTypes" disabled placeholder='请选择部门'>
                     <el-option
                             v-for="(item,index) in bumenTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='学历' prop="xueliTypes">
                 <el-select v-model="ruleForm.xueliTypes" disabled placeholder='请选择学历'>
                     <el-option
                             v-for="(item,index) in xueliTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='专业职务' prop="zhuanyezhiwuTypes">
                 <el-select v-model="ruleForm.zhuanyezhiwuTypes" disabled placeholder='请选择专业职务'>
                     <el-option
                             v-for="(item,index) in zhuanyezhiwuTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='合同类型' prop="hetongTypes">
                 <el-select v-model="ruleForm.hetongTypes" disabled placeholder='请选择合同类型'>
                     <el-option
                             v-for="(item,index) in hetongTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='合同文件' prop="hetongFile">
               <!--<el-input v-model="ruleForm.hetongFile"  placeholder='合同文件' clearable></el-input>-->
               <div v-if="ruleForm.hetongFile">
                   <a type="text" style="text-decoration:none" class="el-button" :href="ruleForm.hetongFile"  >下载</a>
               </div>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='政治面貌' prop="zhengzhiTypes">
                 <el-select v-model="ruleForm.zhengzhiTypes"  disabled placeholder='请选择政治面貌'>
                     <el-option
                             v-for="(item,index) in zhengzhiTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='毕业院校' prop="yuangongXuexiao">
               <el-input v-model="ruleForm.yuangongXuexiao"  disabled placeholder='毕业院校' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='岗位' prop="gangweiTypes">
                 <el-select v-model="ruleForm.gangweiTypes" disabled  placeholder='请选择岗位'>
                     <el-option
                             v-for="(item,index) in gangweiTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='户口所在地' prop="hukou">
               <el-input v-model="ruleForm.hukou"  placeholder='户口所在地' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='婚姻' prop="hunyinTypes">
                 <el-select v-model="ruleForm.hunyinTypes"  disabled placeholder='请选择婚姻'>
                     <el-option
                             v-for="(item,index) in hunyinTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='家庭住址' prop="zhuzhi">
               <el-input v-model="ruleForm.zhuzhi"  placeholder='家庭住址' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='民族' prop="minzu">
               <el-input v-model="ruleForm.minzu"  placeholder='民族' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='专业' prop="zhuanyeTypes">
                 <el-select v-model="ruleForm.zhuanyeTypes" disabled  placeholder='请选择专业'>
                     <el-option
                             v-for="(item,index) in zhuanyeTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users' && flag!='shangjia'"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      sexTypesOptions : [],
     bumenTypesOptions : [],
     xueliTypesOptions : [],
     zhuanyezhiwuTypesOptions : [],
     hetongTypesOptions : [],
     zhengzhiTypesOptions : [],
     gangweiTypesOptions : [],
     hunyinTypesOptions : [],
     zhuanyeTypesOptions : [],
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
          this.sexTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
  });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=bumen_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.bumenTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=xueli_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.xueliTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhuanyezhiwu_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.zhuanyezhiwuTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=hetong_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.hetongTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhengzhi_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.zhengzhiTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=gangwei_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.gangweiTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=hunyin_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.hunyinTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhuanye_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.zhuanyeTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
  },
  methods: {
    yuangongPhotoUploadChange(fileUrls) {
        this.ruleForm.yuangongPhoto = fileUrls;
    },

    onUpdateHandler() {
                         if((!this.ruleForm.yuangongUuidNumber)&& 'yuangong'==this.flag){
                             this.$message.error('员工编号不能为空');
                             return
                         }

                         if((!this.ruleForm.yuangongName)&& 'yuangong'==this.flag){
                             this.$message.error('员工姓名不能为空');
                             return
                         }

                             if( 'yuangong' ==this.flag && this.ruleForm.yuangongPhone&&(!isMobile(this.ruleForm.yuangongPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.yuangongIdNumber)&& 'yuangong'==this.flag){
                             this.$message.error('员工身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.yuangongPhoto)&& 'yuangong'==this.flag){
                             this.$message.error('员工头像不能为空');
                             return
                         }

                             if( 'yuangong' ==this.flag && this.ruleForm.yuangongEmail&&(!isEmail(this.ruleForm.yuangongEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.bumenTypes)&& 'yuangong'==this.flag){
                             this.$message.error('部门不能为空');
                             return
                         }

                         if((!this.ruleForm.xueliTypes)&& 'yuangong'==this.flag){
                             this.$message.error('学历不能为空');
                             return
                         }

                         if((!this.ruleForm.zhuanyezhiwuTypes)&& 'yuangong'==this.flag){
                             this.$message.error('专业职务不能为空');
                             return
                         }

                         if((!this.ruleForm.hetongTypes)&& 'yuangong'==this.flag){
                             this.$message.error('合同类型不能为空');
                             return
                         }

                         if((!this.ruleForm.hetongFile)&& 'yuangong'==this.flag){
                             this.$message.error('合同文件不能为空');
                             return
                         }

                         if((!this.ruleForm.zhengzhiTypes)&& 'yuangong'==this.flag){
                             this.$message.error('政治面貌不能为空');
                             return
                         }

                         if((!this.ruleForm.yuangongXuexiao)&& 'yuangong'==this.flag){
                             this.$message.error('毕业院校不能为空');
                             return
                         }

                         if((!this.ruleForm.gangweiTypes)&& 'yuangong'==this.flag){
                             this.$message.error('岗位不能为空');
                             return
                         }

                         if((!this.ruleForm.hukou)&& 'yuangong'==this.flag){
                             this.$message.error('户口所在地不能为空');
                             return
                         }

                         if((!this.ruleForm.hunyinTypes)&& 'yuangong'==this.flag){
                             this.$message.error('婚姻不能为空');
                             return
                         }

                         if((!this.ruleForm.zhuzhi)&& 'yuangong'==this.flag){
                             this.$message.error('家庭住址不能为空');
                             return
                         }

                         if((!this.ruleForm.minzu)&& 'yuangong'==this.flag){
                             this.$message.error('民族不能为空');
                             return
                         }

                         if((!this.ruleForm.zhuanyeTypes)&& 'yuangong'==this.flag){
                             this.$message.error('专业不能为空');
                             return
                         }

        if((!this.ruleForm.sexTypes) && this.flag!='users' && this.flag!='shangjia'){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

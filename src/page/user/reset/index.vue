<template>
  <el-form ref="resetForm" status-icon :model="formData" :rules="rules" label-width="120px" size="mini">
    <el-form-item label="手机号" prop="phoneNumber" required>
      <el-input v-model.number="formData.phoneNumber" class="form-input"></el-input>
    </el-form-item>
    <div>
      <el-form-item label="输入验证码" prop="code" required style="display: inline-block">
        <el-input v-model.number="formData.code" class="form-input"></el-input>
      </el-form-item>
      <el-button type="primary" size="mini" @click="getCode" style="margin-left: 16px">获取验证码</el-button>
    </div>
    <el-form-item label="新密码" prop="password" required>
      <el-input v-model="formData.password" class="form-input"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPassword" required>
      <el-input v-model="formData.confirmPassword" class="form-input"></el-input>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="submitForm('resetForm')">提交</el-button>
      <el-button @click="resetForm('resetForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'resetPage',
  data() {
    const validatePhoneNumber = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'));
      } else {
        const reg = /1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}/;
        if (!reg.test(value)) {
          callback(new Error('请输入正确的手机号'));
        }
        callback();
      }
    };

    const validateConfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formData.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      formData: {
        phoneNumber: '',
        code: '',
        password: '',
        confirmPassword: '',
      },
      // { required: true, message: '请选择活动区域', trigger: 'change' }
      rules: {
        phoneNumber: [
          { validator: validatePhoneNumber, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { validator: validateConfirmPassword, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 修改请求地址，向后端发起登录请求
          // fetch("http://127.0.0.1:7777/postContent", {
          //     method: "POST",
          //     headers: {
          //         "Content-Type": "application/json",
          //     },
          //     mode: "cors",
          //     body: params
          // }).then(function(res) {
          //     if (res.status === 200) {
          //         return res.json()
          //     } else {
          //         return Promise.reject(res.json())
          //     }
          // }).then(function(data) {
          //     console.log(data);
          // }).catch(function(err) {
          //     console.log(err);
          // });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.form-input {
  width: 250px;
}

.warning-message {
  border: 1px #cdcdcd solid;
  background: #f5f5f5;
  padding: 8px 40px;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
<template>
    <el-form ref="registerForm" status-icon :model="formData" :rules="rules" label-width="120px" size="mini">
        <el-form-item label="手机号" prop="phoneNumber" required>
            <el-input v-model.number="formData.phoneNumber" class="form-input"></el-input>
        </el-form-item>
        <div>
            <el-form-item label="输入验证码" prop="code" required style="display: inline-block">
                <el-input v-model.number="formData.code" class="form-input"></el-input>
            </el-form-item>
            <el-button type="primary" size="mini" @click="getCode" style="margin-left: 16px">获取验证码</el-button>
        </div>
        <el-form-item label="密码" prop="password" required>
            <el-input v-model="formData.password" class="form-input"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword" required>
            <el-input v-model="formData.confirmPassword" class="form-input"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email" required>
            <el-input v-model="formData.email" class="form-input"></el-input>
        </el-form-item>
        <div class="warning-message">
            <div style="margin-bottom: 8px">
                <i class="el-icon-warning"
                    style="color: red" />以下涉及防沉迷系统、实名制验证资料，将做为通行证所有权的最终凭证。请正确填写您的真实姓名和身份证号码以保障您的用户权益。如果您当前年龄未满18周岁，您将会被纳入防沉迷系统。
            </div>
            <el-form-item label="真实姓名" prop="name" required>
                <el-input v-model="formData.name" class="form-input"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="idCard" required>
                <el-input v-model="formData.idCard" class="form-input"></el-input>
            </el-form-item>
        </div>
        <el-form-item size="large">
            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'registerPage',
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

        const validateEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('邮箱不能为空'));
            } else {
                const reg = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
                if (!reg.test(value)) {
                    callback(new Error('请输入正确的邮箱'));
                }
                callback();
            }
        };
        return {
            formData: {
                phoneNumber: '',
                code: '',
                password: '',
                confirmPassword: '',
                email: '',
                name: '',
                idCard: ''
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
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入真实姓名', trigger: 'blur' }
                ],
                idCard: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        getCode() {
            this.$refs.registerForm.validateField('phoneNumber');
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.formData);
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
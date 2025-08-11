<template>
  <v-container>
    <v-card class="pa-4" max-width="100%" mx="auto">
      <v-card-title>نام شما چیست؟</v-card-title>
      <v-text-field v-model="username" label="نام" />
      <v-btn color="primary" class="mt-2" @click="saveName" :disabled="!username">ثبت</v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUsername } from '@/composables/useUsername'

const router = useRouter()
const { username } = useUsername()

function saveName() {
  router.push('/dashboard');
}
</script>









<!-- /////////////////////////////// -->
<!-- 
<template>
  <v-app>
    <v-main>
      <v-container>

        <h1 v-if="userName">سلام، {{ userName }}!</h1>
        <h1 v-else>به برنامه خوش آمدید!</h1>

        <v-dialog v-model="showNamePrompt" persistent max-width="500px">
          <v-card>
            <v-card-title class="headline">نام خود را وارد کنید</v-card-title>
            <v-card-text>
              <v-text-field
                label="نام شما"
                v-model="userName"
                hide-details
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="saveName">ذخیره</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const userName = ref('');
const showNamePrompt = ref(false); // برای نمایش/پنهان کردن دیالوگ گرفتن نام

onMounted(() => {
  // وقتی کامپوننت mount شد، چک کن ببین نام کاربر قبلاً ذخیره شده یا نه
  const storedName = localStorage.getItem('userName');
  if (storedName) {
    userName.value = storedName;
    // شاید بخوای کاربر رو به صفحه اصلی هدایت کنی یا پیام خوش‌آمدگویی نمایش بدی
    console.log(`خوش آمدید، ${userName.value}!`);
  } else {
    // اگه نام ذخیره نشده، دیالوگ گرفتن نام رو نمایش بده
    showNamePrompt.value = true;
  }
});

const saveName = () => {
  if (userName.value) {
    localStorage.setItem('userName', userName.value);
    showNamePrompt.value = false; // دیالوگ رو ببند
    console.log(`نام شما (${userName.value}) ذخیره شد!`);
    // اینجا می‌تونی یه پیام موفقیت نمایش بدی یا کاربر رو هدایت کنی
  } else {
    // پیام خطا یا هشدار اگه نام خالی بود
    alert('لطفاً نام خود را وارد کنید.');
  }
};
</script>
 -->


<!-- ////////////////////////// -->
<!-- <template>
  <v-container>
    <v-card class="pa-4 mx-auto" max-width="400">
      <v-card-title>👋 خوش آمدید</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="username"
          label="نام خود را وارد کنید"
          outlined
        />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveName">ادامه</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const username = ref('')
const router = useRouter()
const userStore = useUserStore()

function saveName() {
  if (!username.value.trim()) return
  userStore.setName(username.value.trim())
  router.push('/') // هدایت به صفحه اصلی
}
</script> -->

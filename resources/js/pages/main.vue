<template>
    <BaseLayout>
        <n-form ref="formRef" :model="form" :rules="rules" label-placement="top">
            <h2 style="margin-bottom: 16px;">{{ $t('personalInformation') }}:</h2>

            <n-grid :cols="6" x-gap="16">
                <n-gi :span="2">
                    <n-form-item :label="$t('sex')" path="title">
                        <n-select
                            v-model:value="form.title"
                            :options="titleOptions"
                            placeholder="Select..."
                        />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item  :label="$t('firstName')"   path="firstName">
                        <n-input v-model:value="form.firstName" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('lastName')"    path="lastName">
                        <n-input v-model:value="form.lastName" />
                    </n-form-item>
                </n-gi>

                <n-gi :span="2">
                    <n-form-item :label="$t('street')"  path="street">
                        <n-input v-model:value="form.street" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="1">
                    <n-form-item :label="$t('houseNumber')"   path="houseNumber">
                        <n-input v-model:value="form.houseNumber" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="1">
                    <n-form-item :label="$t('postalCode')"  path="postalCode">
                        <n-input v-model:value="form.postalCode" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('city')"   path="city">
                        <n-input v-model:value="form.city" />
                    </n-form-item>
                </n-gi>

                <n-gi :span="2">
                    <n-form-item :label="$t('phoneNumber')"  path="phone">
                        <n-input v-model:value="form.phone" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('email')"   path="email">
                        <n-input v-model:value="form.email" />
                    </n-form-item>
                </n-gi>

                <n-gi :span="2">
                    <n-form-item :label="$t('dateOfBirth')"   path="birthDate">
                        <n-date-picker
                            v-model:value="form.birthDate"
                            type="date"
                            placeholder="mm/dd/yyyy"
                            value-format="yyyy-MM-dd"
                            style="width: 100%"
                        />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('placeOfBirth')"   path="placeOfBirth">
                        <n-input v-model:value="form.placeOfBirth" />
                    </n-form-item>
                </n-gi>

                <n-gi :span="2">
                    <n-form-item :label="$t('maritalStatus')"    path="maritalStatus">
                        <n-input v-model:value="form.maritalStatus" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('nationality')"   path="nationality">
                        <n-input v-model:value="form.nationality" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('denomination')"    path="denomination">
                        <n-input v-model:value="form.denomination" />
                    </n-form-item>
                </n-gi>

                <n-gi :span="2">
                    <n-form-item :label="$t('fathersFirstName')"  path="fatherFirstName">
                        <n-input v-model:value="form.fatherFirstName" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('fathersLastName')"  path="fatherLastName">
                        <n-input v-model:value="form.fatherLastName" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('fathersNationality')"  path="fatherNationality">
                        <n-input v-model:value="form.fatherNationality" />
                    </n-form-item>
                </n-gi>
            </n-grid>


            <n-divider style="margin-top: 48px;" />
            <h2 style="margin-bottom: 16px;">{{ $t('degreeEducation') }}:</h2>
             <n-grid :cols="6" x-gap="16">
                <n-gi :span="3">
                    <n-form-item :label="$t('diploma')" path="diploma">
                        <n-input v-model:value="form.diploma" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="3">
                    <n-form-item :label="$t('specialization')" path="specialization">
                        <n-input v-model:value="form.specialization" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('placeOfTraining')" path="placeOfTraining">
                        <n-input v-model:value="form.placeOfTraining" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('graduationYear')" path="graduationYear">
                        <n-input v-model:value="form.graduationYear" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('thesisGrade')" path="gradeOfThesis">
                        <n-input v-model:value="form.gradeOfThesis" />
                    </n-form-item>
                </n-gi>
            </n-grid>

            <n-divider style="margin-top: 48px;" />
            <h2 style="margin-bottom: 16px;">{{ $t('degreeEducation') }}:</h2>

            <n-grid :cols="6" x-gap="16">
                <n-gi :span="3">
                    <n-form-item :label="$t('diploma')" path="theoDiploma">
                        <n-input v-model:value="form.theoDiploma" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="3">
                    <n-form-item label="Name of the school" path="theoSchoolName">
                        <n-input v-model:value="form.theoSchoolName" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="3">
                    <n-form-item :label="$t('placeOfTraining')" path="theoPlaceOfTraining">
                        <n-input v-model:value="form.theoPlaceOfTraining" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="3">
                    <n-form-item :label="$t('DurationOfTraining')"   path="theoDuration">
                        <n-input v-model:value="form.theoDuration" />
                    </n-form-item>
                </n-gi>
            </n-grid>


            <n-divider style="margin-top:48px;" />
            <h2 style="margin-bottom:16px;">{{ $t('spouse') }}:</h2>
            <n-grid :cols="6" x-gap="16">
                <n-gi :span="2">
                    <n-form-item :label="$t('sex')"   path="spouseTitle">
                        <n-select
                            v-model:value="form.spouseTitle"
                            :options="titleOptions"
                            placeholder="Select..."
                        />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item  :label="$t('firstName')"   path="spouseFirstName">
                        <n-input v-model:value="form.spouseFirstName" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item  :label="$t('lastName')"   path="spouseLastName">
                        <n-input v-model:value="form.spouseLastName" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('spouseNationality')" path="spouseNationality">
                        <n-input v-model:value="form.spouseNationality" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('spouseDenomination')" path="spouseDenomination">
                        <n-input v-model:value="form.spouseDenomination" />
                    </n-form-item>
                </n-gi>
                <n-gi :span="2">
                    <n-form-item :label="$t('spouseProfession')" path="spouseProfession">
                        <n-input v-model:value="form.spouseProfession" />
                    </n-form-item>
                </n-gi>
            </n-grid>


            <n-divider style="margin-top:48px;" />
            <h2 style="margin-bottom:16px;">{{ $t('studyForm') }}:</h2>
            <n-form-item path="studyForm">
                <n-radio-group v-model:value="form.studyForm">
                    <n-space vertical>
                        <n-radio value="full-time">{{ $t('fullTime') }}</n-radio>
                        <n-radio value="part-time">{{ $t('partTime') }}</n-radio>
                        <n-radio value="guest-certificate">{{ $t('GuestStudentshipWithCertificate') }}</n-radio>
                        <n-radio value="guest-no-certificate">{{ $t('GuestStudentStatusWithoutCertificate') }}</n-radio>
                    </n-space>
                </n-radio-group>
            </n-form-item>


            <n-divider style="margin-top:48px;" />
            <h2 style="margin-bottom:16px;">{{ $t('participationType') }}:</h2>
            <n-form-item path="participationType">
                <n-radio-group v-model:value="form.participationType">
                    <n-space vertical>
                        <n-radio value="online">{{ $t('online') }}</n-radio>
                        <n-radio value="offline">{{ $t('offline') }}</n-radio>
                    </n-space>
                </n-radio-group>
            </n-form-item>



            <n-divider style="margin-top:48px;" />
            <h2 style="margin-bottom:16px;">{{ $t('moduleSelection') }}:</h2>
            <n-form-item path="modules">
                <n-checkbox-group v-model:value="form.modules">
                    <n-space vertical>
                        <n-checkbox value="arabic">Arabic III</n-checkbox>
                        <n-checkbox value="persian">Persian III</n-checkbox>
                        <n-checkbox value="beliefs">{{$t('foundationsOfBelief3')}}</n-checkbox>
                        <n-checkbox value="quranWords">{{$t('wordsOfQuranAndRoots3')}}</n-checkbox>
                        <n-checkbox value="logic">{{$t('logic2')}}I</n-checkbox>
                        <n-checkbox value="legalProvisions">{{$t('islamicLegalProvisions3')}}</n-checkbox>
                        <n-checkbox value="quranicIntro">{{$t('introQuranicStudies')}}</n-checkbox>
                        <n-checkbox value="recitation">{{$t('recitationIntonationQuran1')}}</n-checkbox>
                        <n-checkbox value="legalTheory">{{$t('introIslamicLegalNorms')}}</n-checkbox>
                    </n-space>
                </n-checkbox-group>
            </n-form-item>

            <n-divider style="margin-top:48px;" />
            <h2 style="margin-bottom:16px;">
                {{$t('documents') }}
            </h2>
            <n-space vertical size="large">
                <div>
                    <span>  {{$t('copyOfPassportOrId') }}</span><br/>
                    <n-upload
                        v-model:file-list="form.passportFiles"
                        :accept="'.pdf,.jpg,.jpeg,.png,.doc,.docx'"
                        :max="1"
                        list-type="text"
                    >
                        <n-button>{{ $t('ChooseFile') }}</n-button>
                    </n-upload>
                </div>
                <div>
                    <span>{{ $t('Certificates') }}</span><br/>
                    <n-upload
                        v-model:file-list="form.certificateFiles"
                        :accept="'.pdf,.jpg,.jpeg,.png,.doc,.docx'"
                        :max="1"
                        list-type="text"
                    >
                        <n-button>{{ $t('ChooseFile') }}</n-button>
                    </n-upload>
                </div>
                <div>
                    <span>{{$t('biometricPhoto') }}</span><br/>
                    <n-upload
                        v-model:file-list="form.photoFiles"
                        :accept="'.pdf,.jpg,.jpeg,.png,.doc,.docx'"
                        :max="1"
                        list-type="text"
                    >
                        <n-button>{{ $t('ChooseFile') }}</n-button>
                    </n-upload>
                </div>
                <div>
                    <span>CV</span><br/>
                    <n-upload
                        v-model:file-list="form.cvFiles"
                        :accept="'.pdf,.jpg,.jpeg,.png,.doc,.docx'"
                        :max="1"
                        list-type="text"
                    >
                        <n-button>{{ $t('ChooseFile') }}</n-button>
                    </n-upload>
                </div>
            </n-space>


            <n-divider style="margin-top:48px;" />
            <h2 style="margin-bottom:16px;">{{$t('furtherQuestions') }}</h2>
            <n-form-item path="additionalQuestions">
                <n-input
                    v-model:value="form.additionalQuestions"
                    type="textarea"
                    autosize
                    placeholder="Your message or question..."
                    style="min-height:120px;"
                />
            </n-form-item>

            <n-divider style="margin-top:48px;" />
            <h2 style="margin-bottom:16px;">{{$t('consentAndNewsletter') }}</h2>
            <n-space vertical>
                <n-checkbox
                    v-model:checked="form.consent"
                    :required="true"
                >
                    I agree that the information I submit will be stored so that my request can be answered.
                </n-checkbox>
                <n-checkbox v-model:checked="form.newsletter">
                    {{$t('newsletter') }}
                 </n-checkbox>
            </n-space>

            <n-form-item>
                <n-button
                    type="primary"
                    :disabled="!form.consent"
                    @click="handleSubmit"
                    style="margin-top:32px;"
                    block
                >
                    Submit
                </n-button>
            </n-form-item>






            <div style="margin-top:24px">
                <n-button type="primary" @click="handleSubmit">Submit</n-button>
            </div>


        </n-form>

    </BaseLayout>

</template>


<script setup>
import BaseLayout from "../components/BaseLayout.vue";

import { ref } from 'vue'
import {
    NForm,
    NFormItem,
    NInput,
    NSelect,
    NDatePicker,
    NButton,
    NGrid,
    NGi
} from 'naive-ui'

const formRef = ref(null)
const form = ref({
    title: null,
    firstName: '',
    lastName: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    phone: '',
    email: '',
    birthDate: null,
    placeOfBirth: '',
    maritalStatus: '',
    nationality: '',
    denomination: '',
    fatherFirstName: '',
    fatherLastName: '',
    fatherNationality: '',
    // بخش Degree/Education
    diploma: '',
    specialization: '',
    placeOfTraining: '',
    graduationYear: '',
    gradeOfThesis: '',
    // بخش Theological education
    theoDiploma: '',
    theoSchoolName: '',
    theoPlaceOfTraining: '',
    theoDuration: '',
    // بخش Spouse
    spouseTitle: '',
    spouseFirstName: '',
    spouseLastName: '',
    spouseNationality: '',
    spouseDenomination: '',
    spouseProfession: '',

    // Study Form
    studyForm: 'full-time', // مقدار پیش‌فرض
    participationType: 'online', // مقدار پیش‌فرض
    modules: [],
    passportFiles: [],
    certificateFiles: [],
    photoFiles: [],
    cvFiles: [],
    additionalQuestions: '',
    consent: false,
    newsletter: false,
})

const titleOptions = [
    { label: 'Mister', value: 'mister' },
    { label: 'Miss', value: 'miss' },
    { label: 'Mrs', value: 'mrs' },
]

const rules = {
    title: { required: true, message: "Please fill in this field.", trigger: "blur" },
    firstName: { required: true, message: "Please fill in this field.", trigger: "blur" },
    lastName: { required: true, message: "Please fill in this field.", trigger: "blur" },
    street: { required: true, message: "Please fill in this field.", trigger: "blur" },
    houseNumber: { required: true, message: "Please fill in this field.", trigger: "blur" },
    postalCode: { required: true, message: "Please fill in this field.", trigger: "blur" },
    city: { required: true, message: "Please fill in this field.", trigger: "blur" },
    phone: { required: true, message: "Please fill in this field.", trigger: "blur" },
    email: { required: true, message: "Please fill in this field.", trigger: "blur" },
    // birthDate: { required: true, message: "Please fill in this field.", trigger: "blur" },
    placeOfBirth: { required: true, message: "Please fill in this field.", trigger: "blur" },
    maritalStatus: { required: true, message: "Please fill in this field.", trigger: "blur" },
    nationality: { required: true, message: "Please fill in this field.", trigger: "blur" },
    denomination: { required: true, message: "Please fill in this field.", trigger: "blur" },
    // Degree/Education
    diploma: { required: true, message: "Please fill in this field.", trigger: "blur" },
    specialization: { required: true, message: "Please fill in this field.", trigger: "blur" },
    placeOfTraining: { required: true, message: "Please fill in this field.", trigger: "blur" },
    graduationYear: { required: true, message: "Please fill in this field.", trigger: "blur" },
    gradeOfThesis: { required: true, message: "Please fill in this field.", trigger: "blur" },
}

function handleSubmit() {
    console.log(form.value)
    formRef.value?.validate((errors) => {
        if (!errors) {
            if (form.value.consent) {
                // اینجا بخشی که می‌خوای دیتا رو بفرستی یا ذخیره کنی
                console.log('Submitting', form.value);
                // پیغام موفقیت یا رفتن به مرحله بعد
            } else {
                // هندل ارور، هرچند غیر ممکنه چون دکمه غیر فعال میشه!
            }

            // Api call here (composer style)
            // emit or axios POST
            console.log(form.value)
            // یا:
            // emit('submit', { ...form.value })
        }
    })
}
</script>



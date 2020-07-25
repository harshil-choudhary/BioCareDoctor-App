import { combineReducers } from "redux"
import addAdvertisement from "./addAdvertisement"
import addBlog from "./addBlog"
import addClinic from "./addClinic"
import addHospital from "./addHospital"
import advertisements from "./advertisements"
import appointmentBasic from "./appointmentBasic"
import appointmentCancel from "./appointmentCancel"
import appointmentConfirm from "./appointmentConfirm"
import appointmentConsultHistory from "./appointmentConsultHistory"
import appointmentConsultSave from "./appointmentConsultSave"
import appointmentMedicine from "./appointmentMedicine"
import appointmentMedicineAdd from "./appointmentMedicineAdd"
import appointmentPastHistory from "./appointmentPastHistory"
import appointmentPayments from "./appointmentPayments"
import appointmentReportAdd from "./appointmentReportAdd"
import appointmentReports from "./appointmentReports"
import appointmentSearch from "./appointmentSearch"
import appointmentTest from "./appointmentTest"
import appointmentTestAdd from "./appointmentTestAdd"
import appointmentVaccinations from "./appointmentVaccinations"
import bankDetails from "./bankDetails"
import blogs from "./blogs"
import categories from "./categories"
import ChangePassword from "./ChangePassword"
import clinic from "./clinic"
import doctorCategory from "./doctorCategory"

import forgotPassword from "./forgotPassword"
import getLeaves from "./getLeaves"
import getTimeSlots from "./getTimeSlots"
import hospitals from "./hospitals"
import invoiceDetails from "./invoiceDetails"
import invoiceList from "./invoiceList"
import login from "./login"
import myNetwork from "./myNetwork"
import patientList from "./patientList"
import patientReports from "./patientReports"
import paymentMethod from "./paymentMethod"
import paymentReceipts from "./paymentReceipts"
import profile from "./profile"
import profileSave from "./profileSave"
import ratings from "./ratings"
import register from "./register"
import reportDetails from "./reportDetails"
import reports from "./reports"
import saveBankDetails from "./saveBankDetails"
import saveLeaves from "./saveLeaves"
import saveTimeSlots from "./saveTimeSlots"
import searchNetwork from "./searchNetwork"
import sendDoctorequest from "./sendDoctorequest"
import sendMoneyBank from "./sendMoneyBank"
import sendVideo from "./sendVideo"
import SubscriptionPackage from "./SubscriptionPackage"
import SubscriptionPackageSelect from "./SubscriptionPackageSelect"
import threeDModel from "./threeDModel"
import videoList from "./videoList"
import walletTransactions from "./walletTransactions"

const rootReducer = combineReducers({
  addBlog: addBlog,
  addClinic: addClinic,
  addHospital: addHospital,
  advertisements: advertisements,
  appointmentBasic: appointmentBasic,
  appointmentCancel: appointmentCancel,
  appointmentConfirm: appointmentConfirm,
  appointmentConsultSave: appointmentConsultSave,
  appointmentMedicine: appointmentMedicine,
  appointmentMedicineAdd: appointmentMedicineAdd,
  appointmentPastHistory: appointmentPastHistory,
  appointmentPayments: appointmentPayments,
  appointmentReportAdd: appointmentReportAdd,
  appointmentReports: appointmentReports,
  appointmentSearch: appointmentSearch,
  appointmentTest: appointmentTest,
  appointmentTestAdd: appointmentTestAdd,
  appointmentVaccinations: appointmentVaccinations,
  //appointmentWalkin: appointmentWalkin,
  bankDetails: bankDetails,
  blogs: blogs,
  categories: categories,
  ChangePassword: ChangePassword,
  clinic: clinic,
  doctorCategory: doctorCategory,
 
  forgotPassword: forgotPassword,
  getLeaves: getLeaves,
  getTimeSlots: getTimeSlots,
  hospitals: hospitals,
  invoiceDetails: invoiceDetails,
  invoiceList: invoiceList,
  login: login,
  myNetwork: myNetwork,
  patientList: patientList,
  patientReports: patientReports,
  paymentMethod: paymentMethod,
  paymentReceipts: paymentReceipts,
  profile: profile,
  profileSave: profileSave,
  ratings: ratings,
  register: register,
  reportDetails: reportDetails,
  reports: reports,
  saveBankDetails: saveBankDetails,
  saveLeaves: saveLeaves,
  saveTimeSlots: saveTimeSlots,
  searchNetwork: searchNetwork,
  sendDoctorequest: sendDoctorequest,
  //sendMoneyBank: sendMoneyBank,
  sendVideo: sendVideo,
  SubscriptionPackage: SubscriptionPackage,
  SubscriptionPackageSelect: SubscriptionPackageSelect,
  threeDModel: threeDModel,
  videoList: videoList,
  walletTransactions: walletTransactions,
  walletTransactions: walletTransactions,


})

export default rootReducer
// IDE에 .vue 파일을 알려주기 위해 사용한다.
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
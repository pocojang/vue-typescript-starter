// TS에 .vue 파일을 알려주기 위해 사용한다. 궁극적으로는 Single File Components를 위함
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
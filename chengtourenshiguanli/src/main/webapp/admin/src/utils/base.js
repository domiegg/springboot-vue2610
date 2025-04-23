const base = {
    get() {
        return {
            url : "http://localhost:8080/chengtourenshiguanli/",
            name: "chengtourenshiguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chengtourenshiguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "城投公司企业人事管理系统"
        } 
    }
}
export default base

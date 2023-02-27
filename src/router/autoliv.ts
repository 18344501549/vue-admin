import { RouteRecordRaw } from 'vue-router';
// {
//     path:
//     component: { },
//     children: [

//     ]
// }


// 获取layouts文件下面的所有文件,进行自动注册路由
const layouts = import.meta.glob('../layouts/*.vue');
const views = import.meta.glob('../views/**/*.vue');




function getRoutes() {
    const LayoutRoutes = [] as RouteRecordRaw[];
    Object.entries(layouts).forEach(([file, module]) => {
        const route = getRouteByModule(file, module);
        route.children = getChildrenRoutes(route);
        LayoutRoutes.push(route);
    });
    return LayoutRoutes;
};

// 获取布局的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    const routes = [] as RouteRecordRaw[];
    Object.entries(views).forEach(([file, module]) => {
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            const route = getRouteByModule(file, module);
            routes.push(route);
        };
    });
    return routes;
};



function getRouteByModule(file: string, module: { [key: string]: any }) {
    // 正则匹配路由进行组装
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '');
    const route = {
        path: `/${name}`,
        name: name.replace('/', '-'),
        component: module
    } as RouteRecordRaw;

    return route;
};



export default getRoutes();

//필요한 모듈 import 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants/routes';
import TeaSwipeNavigator from './TeaSwipeNavigator';

//페이지 import 
//공통 페이지
import Login from "../pages/common/Login";
import Signup1 from "../pages/common/Signup1";
//학생 페이지
import StuCancel1 from "../pages/student/StuCancel1";
import StuCancel2 from "../pages/student/StuCancel2";
import StuDetail from "../pages/student/StuDetail";
import StuHome from "../pages/student/StuHome";
import StuProfile from "../pages/student/StuProfile";
import StuRanking from "../pages/student/StuRanking";
import StuSignup2 from "../pages/student/StuSignup2";
//선생 페이지
import TeaDelete from "../pages/teacher/TeaDelete";
import TeaGenerate1 from "../pages/teacher/TeaGenerate1";
import TeaGenerate2 from "../pages/teacher/TeaGenerate2";
import TeaGenerate3 from "../pages/teacher/TeaGenerate3";
import TeaGenerateDetail from "../pages/teacher/TeaGenerateDetail";
import TeaSignup2 from "../pages/teacher/TeaSignup2";

function RootNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* initialRouteName에 본인 개발하는 페이지 삽입 */}
      <Stack.Navigator initialRouteName={ROUTES.TeaMain} screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' }, }}>
        {/* 공통 페이지 */}
        <Stack.Screen name={ROUTES.Login} component={Login}/>
        <Stack.Screen name={ROUTES.Signup1} component={Signup1}/>
        {/* 학생 페이지 */}
        <Stack.Screen name={ROUTES.StuCancel1} component={StuCancel1}/>
        <Stack.Screen name={ROUTES.StuCancel2} component={StuCancel2}/>
        <Stack.Screen name={ROUTES.StuDetail} component={StuDetail}/>
        <Stack.Screen name={ROUTES.StuHome} component={StuHome}/>
        <Stack.Screen name={ROUTES.StuProfile} component={StuProfile}/>
        <Stack.Screen name={ROUTES.StuRanking} component={StuRanking}/>
        <Stack.Screen name={ROUTES.StuSignup2} component={StuSignup2}/>
        {/* 선생 페이지 */}
        <Stack.Screen name={ROUTES.TeaDelete} component={TeaDelete}/>
        <Stack.Screen name={ROUTES.TeaGenerate1} component={TeaGenerate1}/>
        <Stack.Screen name={ROUTES.TeaGenerate2} component={TeaGenerate2}/>
        <Stack.Screen name={ROUTES.TeaGenerate3} component={TeaGenerate3}/>
        <Stack.Screen name={ROUTES.TeaGenerateDetail} component={TeaGenerateDetail}/>
        <Stack.Screen 
          name={ROUTES.TeaMain}
          component={TeaSwipeNavigator}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name={ROUTES.TeaSignup2} component={TeaSignup2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
//필요한 모듈 import 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './src/constants/routes';

//페이지 import 
//공통 페이지
import Login from "./src/pages/common/Login";
import Signup1 from "./src/pages/common/Signup1";
//학생 페이지
import StuCancel1 from "./src/pages/student/StuCancel1";
import StuCancel2 from "./src/pages/student/StuCancel2";
import StuDetail from "./src/pages/student/StuDetail";
import StuHome from "./src/pages/student/StuHome";
import StuProfile from "./src/pages/student/StuProfile";
import StuRanking from "./src/pages/student/StuRanking";
import StuSignup2 from "./src/pages/student/StuSignup2";
//선생 페이지
import TeaDelete from "./src/pages/teacher/TeaDelete";
import TeaGenerate1 from "./src/pages/teacher/TeaGenerate1";
import TeaGenerate2 from "./src/pages/teacher/TeaGenerate2";
import TeaGenerate3 from "./src/pages/teacher/TeaGenerate3";
import TeaGenerateDetai from "./src/pages/teacher/TeaGenetateDetail";
import TeaHome from "./src/pages/teacher/TeaHome";
import TeaNotification from "./src/pages/teacher/TeaNotification";
import TeaProfile from "./src/pages/teacher/TeaProfile";
import TeaSignup2 from "./src/pages/teacher/TeaSignup2";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* initialRouteName에 본인 개발하는 페이지 삽입 */}
      <Stack.Navigator initialRouteName={ROUTES.TeaGenerateDetail} screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' }, }}>
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
        <Stack.Screen name={ROUTES.TeaGenerateDetail} component={TeaGenerateDetai}/>
        <Stack.Screen name={ROUTES.TeaHome} component={TeaHome}/>
        <Stack.Screen name={ROUTES.TeaNotification} component={TeaNotification}/>
        <Stack.Screen name={ROUTES.TeaProfile} component={TeaProfile}/>
        <Stack.Screen name={ROUTES.TeaSignup2} component={TeaSignup2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
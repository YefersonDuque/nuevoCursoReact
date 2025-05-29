import { AuthProvider } from "./auth"
import {AppRouter} from './router'
export const HeroresApp = () => {
  return (
    <AuthProvider>
    <AppRouter/>
    </AuthProvider>
  )
}

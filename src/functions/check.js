import { SESSION } from "./session.js"

class CHECK {

    static IS_EMPRY(ob) {
        if (ob.length == 0 || !ob) {
            return true
        }
        else {
            return false
        }
    }

    static IS_OBJECT(ob) {
        try {
            if (Object.entries(ob) && Object.entries(ob).length > 0) {
                return true
            }
            else {
                return false
            }
        } catch (error) {
            return false
        }
      
    }

    static OK(method) {


        SESSION.UPDATE()

        method()

    }
}


export { CHECK }
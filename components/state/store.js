import { createState, useState } from "@hookstate/core"

const store = createState({
    user: {
        auth: {
            email: "none@gmail.com"
        }
    }
})

export default store
export { useState as useStore }
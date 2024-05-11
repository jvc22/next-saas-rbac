import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const canUserInviteSomeoneElse = ability.can('invite', 'User')
const canUserDeleteOtherUsers = ability.can('delete', 'User')

console.log(canUserInviteSomeoneElse, canUserDeleteOtherUsers)

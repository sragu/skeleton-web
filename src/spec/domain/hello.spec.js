/** move this common global config outside spec */
/* global expect, describe, it */

import { greeting } from '../../lib/domain/hello'

describe('Greetings', () => {
  it('should say hello', () => {
    expect(greeting()).to.equal('hello')
  })
})

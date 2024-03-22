// create a derived class since we may want to add node specific things to Context later

import { CoreContext } from '@ht-sdks/events-sdk-js-core'
import { HightouchEvent } from './types'

// While this is not a type, it is a definition
export class Context extends CoreContext<HightouchEvent> {
  static override system() {
    return new this({ type: 'track', event: 'system' })
  }
}

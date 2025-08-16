/* import { TextDecoder, TextEncoder } from 'node:util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
 */
import { TextDecoder, TextEncoder } from "util";

import "@testing-library/jest-dom";

Object.assign(global, { TextDecoder, TextEncoder });

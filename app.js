const local = require('./modules/2.local')

console.log(local)
local.log.info('This is information')
local.log.warn('This is warning')
local.log.error('This is error')

local.anotherLog.info('This is information')
local.anotherLog.warn('This is warning')
local.anotherLog.error('This is error')
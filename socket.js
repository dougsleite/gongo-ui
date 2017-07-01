import {EventEmitter} from 'events'

class Socket {
	constructor(ws = new WebSocket(), ee = new EventEmitter()) {
		this.ws = ws
		this.ee = ee
		ws.onmessage = this.message.bind(this)
		ws.onopen = this.open.bind(this)
		ws.onclose = this.close.bind(this)		
	}

	/**
	* Associate a handler to an event. Listen events from server.
	*/
	on(name, fn) {
		this.ee.on(name, fn)
	}

	/**
	* Remove the event lister
	*/
	off(name, fn) {
		this.ee.removeListener(name, fn)
	}

	/**
	*  Emit an event named 'name' with data 'data' to server
	*/
	emit(name, data) {
		const message = JSON.stringify({name, data})
		this.ws.send(message)
	}

	/**
	* Server call this every time a new msg 'e' is available
	*/
	message(e) {
		try {
			const message = JSON.parse(e.data)
			this.ee.emit(message.name, JSON.stringify(message.data))
		} catch(err) {
			this.ee.emit('error', err)
		}
	}

	/**
	* Server call this once the connection is open
	*/
	open() {
		this.ee.emit('connect')
	}

	/**
	* Server call this once the connection is close
	*/
	close() {
		this.ee.emit('disconnect')
	}	
}

export default Socket


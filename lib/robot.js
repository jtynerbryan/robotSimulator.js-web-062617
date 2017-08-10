'use strict';

const Robot = (function createRobot() {
  
	return class Robot {
	  	constructor() {
	  		this.bearing = 'north';
	  		this.coordinates = [0,0];

	  	}

	  	orient(string) {
	  		if ([ 'east', 'west', 'north', 'south' ].includes(string)) {
	  			this.bearing = string;
	  		} else {
	  			throw new Error("Invalid Robot Bearing");
	  		}
	  		
	  	}

	  	turnLeft() {
	  		switch (this.bearing) {
	  			case 'north':
	  				this.bearing = 'west';
	  				break;
	  			case 'west':
	  				this.bearing = 'south';
	  				break;
	  			case 'south':
	  				this.bearing = 'east';
	  				break;
	  			case 'east':
	  				this.bearing = 'north';
			}
	  	}

	  	turnRight() {
	  		switch (this.bearing) {
	  			case 'north':
	  				this.bearing = 'east';
	  				break;
	  			case 'west':
	  				this.bearing = 'north';
	  				break;
	  			case 'south':
	  				this.bearing = 'west';
	  				break;
	  			case 'east':
	  				this.bearing = 'south';		
			}
	  	}

	  	at(x, y) {
	  		this.coordinates = [x,y];
	  	}

	  	advance() {
	  		switch (this.bearing) {
	  			case 'north':
	  				this.coordinates[1]++;
	  				break;
	  			case 'west':
	  				this.coordinates[0]--;
	  				break;
	  			case 'south':
	  				this.coordinates[1]--;
	  				break;
	  			case 'east':
	  				this.coordinates[0]++;		
			}
	  	}

	  	instructions(string) {
	  		let commands = [];
	  		string.split("").forEach( command => {
	  			switch (command) {
	  				case 'R':
	  					commands.push('turnRight');
	  					break;
	  				case 'L':
	  					commands.push('turnLeft');
	  					break;
	  				case 'A':
	  					commands.push('advance');
	  					break;
	  				default:
	  					throw new Error('That is not a valid command.')		
	  				
	  			}
	  		})
	  		return commands;
	  	}

	  	place(attributes) {
			this.coordinates = [attributes.x, attributes.y];
	  		this.bearing = attributes.direction;
	  	}

	  	evaluate(string) {
	  		string.split("").forEach( command => {
	  			switch (command) {
	  				case 'R':
	  					this.turnRight();
	  					break;
	  				case 'L':
	  					this.turnLeft();
	  					break;
	  				case 'A':
	  					this.advance();
	  					break;
	  				default:
	  					throw new Error('That is not a valid command.')		
	  				
	  			}
	  		})
	  	}
	}
})()

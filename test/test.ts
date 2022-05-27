import assert from 'assert';
import greet from '../greet'

describe('greet', function() {
    it('should test', function() {
        assert.equal("Hello, Bob Crow", greet({
            firstName : "Bob", 
            lastName : "Crow"
          }));
          
    });
});

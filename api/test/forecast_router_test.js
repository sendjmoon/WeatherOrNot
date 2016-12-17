'use strict';

const chai = require('chai');
chai.use(require('chai-http'));
const request = chai.request;
const expect = chai.expect;

const app = require('./test_server');
let server;

describe('testing forecast routes', () => {
  before((done) => {
    server = app.listen(3000, () => {
      console.log('testing server on port 3000');
    });
    done();
  });

  after((done) => {
    server.close();
    done();
  });

  it('should GET the 5 day forecast', (done) => {
    request('localhost:3000')
      .get('/api/forecast')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        done();
      });
  });
});

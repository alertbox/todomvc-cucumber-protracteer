import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

export function setup() {
    chai.should();
    chai.use(chaiAsPromised);
}
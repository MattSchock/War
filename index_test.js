var expect = chai.expect

describe('Functions in war game', function() {
    describe('Fill deck function', function() {
        it('Should populate currentDeck array with cards', function() {
            var x = currentDeck;
            expect(typeof x).to.equal('object');
        });
    });
});
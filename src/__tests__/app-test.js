import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import Player from '../components/player';

describe('Try to load player component', () => {

  let renderer: React.ShallowRenderer;

  //Prepare prop data for testing purpose
  const TEAM = {teamName: "AFL"};
  const PLAYER = {
    playerName: {
      givenName: "John",
      surname: "Smith"
    }
  };
  const POSITION = "Midfielder";

  const RATINGS = [
    {
      ranking: 1
    }
  ];

  beforeEach(()=>{
      renderer = TestUtils.createRenderer();
      renderer.render(<Player
            position={POSITION}
            team={TEAM}
            player={PLAYER}
            detailedRatings={RATINGS}
      />);
  });

  it('loads component and check it is a div', function () {
      const result = renderer.getRenderOutput();
      assert.equal(result.type, 'div');
  });
});

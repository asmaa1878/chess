// jshint esversion: 6
let main = {

  variables:{

    selectedpiece: '',
    highlighted: [],
    pieces:{
      p-Blanc-Roi:{
                      position :'cell-Noir-1E',
                      img: '&#9812;',
                      captured: false,
                      moved: false,
                      type: 'p-Blanc-Roi',
                  },
      p-Blanc-Reine : {
                      position: 'cell-Blanc-1D',
                      img: '&#9813;',
                      captured: false,
                      moved:false,
                      type:'p-Blanc-Reine',
                     },
      p-Blanc-Fou-1: {
                      position: 'cell-Noir-1C',
                      img: '&#9815;',
                      captured: false,
                      moved: false,
                      type: 'p-Blanc-Fou',
                     },
      p-Blanc-Fou-2: {
        position: 'cell-Blanc-1F',
        img: '&#9815;',
        captured: false,
        moved: false,
        type: 'p-Blanc-Fou'
      },
      p-Blanc-Cavalier-1: {
        position: 'cell-Blanc-1B',
        img: '&#9816;',
        captured: false,
        moved: false,
        type: 'p-Blanc-Cavalier'
      },
      p-Blanc-Cavalier-2: {
        position: 'cell-Noir-1G',
        img: '&#9816;',
        captured: false,
        moved: false,
        type: 'p-Blanc-Cavalier'
      },
      p-Blanc-Tours-1: {
        position: 'cell-Noir-1A',
        img: '&#9814;',
        captured: false,
        moved: false,
        type: 'p-Blanc-Tours'
      },
      p-Blanc-Tours-2: {
        position: 'cell-Blanc-1H',
        img: '&#9814;',
        captured: false,
        moved: false,
        type: 'p-Blanc-Tours'
      },
      p-Blanc-pion-1: {
        position: 'cell-Blanc-2A',
        img: '&#9817;',
        captured: false,
        type: 'p-Blanc-pion',
        moved: false
      },
      p-Blanc-pion-2: {
        position: 'cell-Blanc-2B',
        img: '&#9817;',
        captured: false,
        type: 'p-Blanc-pion',
        moved: false
      },
      p-Blanc-pion-3: {
        position: 'cell-Blanc-2C',
        img: '&#9817;',
        captured: false,
        type: 'p-Blanc-pion',
        moved: false
      },
      p-Blanc-pion-4: {
        position: 'cell-Blanc-2D',
        img: '&#9817;',
        captured: false,
        type: 'p-Blanc-pion',
        moved: false
      },
      p-Blanc-pion-5: {
        position: 'cell-Blanc-2E',
        img: '&#9817;',
        captured: false,
        type: 'p-Blanc-pion',
        moved: false
      },
      p-Blanc-pion-6: {
        position: 'cell-Blanc-2F',
        img: '&#9817;',
        captured: false,
        type: 'p-Blanc-pion',
        moved: false
      },
      p-Blanc-pion-7: {
        position: 'cell-Blanc-2G',
        img: '&#9817;',
        captured: false,
        type: 'p-Blanc-pion',
        moved: false
      },
      p-Blanc-pion-8: {
        position: 'cell-Blanc-2H',
        img: '&#9817;',
        captured: false,
        type: 'p-Blanc-pion',
        moved: false
      },

      p-Noir-Roi: {
        position: 'cell-Blanc-8E',
        img: '&#9818;',
        captured: false,
        moved: false,
        type: 'p-Noir-Roi'
      },
      p-Noir-Reine: {
        position: 'cell-Noire-8D',
        img: '&#9819;',
        captured: false,
        moved: false,
        type: 'p-Noir-Reine'
      },
      p-Noir-Fou-1: {
        position: 'cell-Blanc-8C',
        img: '&#9821;',
        captured: false,
        moved: false,
        type: 'p-Noir-Fou-1'
      },
      p-Noir-Fou-2: {
        position: 'cell-Noir-8F',
        img: '&#9821;',
        captured: false,
        moved: false,
        type: 'p-Noir-Fou'
      },
      p-Noir-Cavalier-1: {
        position: 'cell-Noir-8B',
        img: '&#9822;',
        captured: false,
        moved: false,
        type: 'p-Noir-Cavalier'
      },
      p-Noir-Cavalier-2: {
        position: 'cell-Blanc-8G',
        img: '&#9822;',
        captured: false,
        moved: false,
        type: 'p-Noir-Cavalier'
      },
      p-Noir-Tours-1: {
        position: 'Cell-Blanc-8A',
        img: '&#9820;',
        captured: false,
        moved: false,
        type: 'p-Noir-Tours'
      },
      p-Noir-Tours-2: {
        position: 'cell-Noir-8H',
        img: '&#9820;',
        captured: false,
        moved: false,
        type: 'p-Noir-Tours'
      },
      p-Noir-pion-1: {
        position: 'cell-Noir-7A',
        img: '&#9823;',
        captured: false,
        type: 'p-Noir-pion',
        moved: false
      },
      p-Noir-pion-2: {
        position: 'cell-Noir-7B',
        img: '&#9823;',
        captured: false,
        type: 'p-Noir-pion',
        moved: false
      },
      p-Noir-pion-3: {
        position: 'cell-Noir-7C',
        img: '&#9823;',
        captured: false,
        type: 'p-Noir-pion',
        moved: false
      },
      p-Noir-pion-4: {
        position: 'cell-Noir-7D',
        img: '&#9823;',
        captured: false,
        type: 'p-Noir-pion',
        moved: false
      },
      p-Noir-pion-5: {
        position: 'cell-Noir-7E',
        img: '&#9823;',
        captured: false,
        type: 'p-Noir-pion',
        moved: false
      },
      p-Noir-pion-6: {
        position: 'cell-Noir-7F',
        img: '&#9823;',
        captured: false,
        type: 'p-Noir-pion',
        moved: false
      },
      p-Noir-pion-7: {
        position: 'cell-Noir-7G',
        img: '&#9823;',
        captured: false,
        type: 'p-Noir-pion',
        moved: false
      },
      p-Noir-pion-8: {
        position: 'cell-Noir-7H',
        img: '&#9823;',
        captured: false,
        type: 'p-Noir-pion',
        moved: false
      },

    };
  };
};
  methods: {
      gamesetup: function() {
        $('.col-md-1 cell').attr('chess', 'null');
        for (let gamepiece in main.variables.pieces) {
          $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
          $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece);
        }
      },

      let position = { x: '', y: '' };
      position.x = main.variables.pieces[selectedpiece].position.split('_')[0];
      position.y = main.variables.pieces[selectedpiece].position.split('_')[1];

      // these options need to be var instead of let
      var options = [];
      var coordinates = [];
      var startpoint = main.variables.pieces[selectedpiece].position;
      var c1,c2,c3,c4,c5,c6,c7,c8;

      if (main.variables.highlighted.length != 0) {
      main.methods.togglehighlight(main.variables.highlighted);
          }

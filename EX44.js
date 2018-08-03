main();
  function main()
  {
      var squad = ["Bob", "John", "Bob", "Kenn", "Bob", "Kevin", "John", "Kevin"];

      var found = squad.find(function(element)
      {
          return element > "Bob";
  });
      alert(found)

  }


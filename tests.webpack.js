var context = require.context('./src/style/components', true, /(.spec\.cjsx?|.spec\.jsx?)$/);
context.keys().forEach(context);
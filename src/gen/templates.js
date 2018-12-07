var Handlebars = require("handlebars/runtime");
exports['graal-nativeimage/Dockerfile'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "# GraalVM docker image used for AoT compilation\nFROM oracle/graalvm-ce:1.0.0-rc10 AS build-aot\n# Add maven wrapper\nADD mvnw app/\nADD .mvn app/.mvn/\n# Add pom\nADD pom.xml app/\n# Add sources\nADD src app/src/\n# Set working dir\nWORKDIR /app\n# Build (java side)\nRUN ./mvnw package\n# Create new image from alpine\nFROM frolvlad/alpine-glibc:alpine-3.8\nRUN apk add --no-cache ca-certificates\n# Copy generated native executable from build-aot\nCOPY --from=build-aot /app/target/"
    + ((stack1 = (helpers.lowerCase || (depth0 && depth0.lowerCase) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.main : stack1),{"name":"lowerCase","hash":{},"data":data})) != null ? stack1 : "")
    + " /"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\nCOPY --from=build-aot /opt/graalvm-ce-1.0.0-rc10/jre/lib/amd64/libsunec.so /libsunec.so\n# Set the entrypoint\nENTRYPOINT [ \"/"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\" ]\n";
},"useData":true})
exports['graal-nativeimage/README.md'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "# "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\n\nThis is your empty project. Ensure you have [GraalVM](https://www.graalvm.org) installed\non your path or use the provided `Dockerfile` to build your image.\n\n## Build\n\n`mvn package`\n\nor\n\n`docker build -t "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + " .`\n\n## Run\n\n`./target/"
    + ((stack1 = (helpers.lowerCase || (depth0 && depth0.lowerCase) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.main : stack1),{"name":"lowerCase","hash":{},"data":data})) != null ? stack1 : "")
    + "`\n\nor\n\n`docker run --rm -it --net=host "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "`\n";
},"useData":true})
exports['gradle/build.gradle'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    classpath 'org.jetbrains.kotlin:kotlin-gradle-plugin:1.1.0'\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "apply plugin: 'kotlin'\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "description = '"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "'\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "  // TODO use compileOnly instead compile for codegen\n  compile '"
    + ((stack1 = ((helper = (helper = helpers.groupId || (depth0 != null ? depth0.groupId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groupId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ":"
    + ((stack1 = ((helper = (helper = helpers.artifactId || (depth0 != null ? depth0.artifactId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artifactId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ":"
    + ((stack1 = ((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.classifier : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "'\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ":"
    + ((stack1 = ((helper = (helper = helpers.classifier || (depth0 != null ? depth0.classifier : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"classifier","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "compileKotlin {\n  kotlinOptions {\n    jvmTarget = '1.8'\n  }\n}\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda;

  return "buildscript {\n  repositories {\n    mavenCentral()\n    jcenter()\n  }\n\n  dependencies {\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.kotlin : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    classpath 'com.github.jengelman.gradle.plugins:shadow:1.2.4'\n  }\n}\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.kotlin : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "apply plugin: 'java'\napply plugin: 'eclipse'\napply plugin: 'application'\napply plugin: 'com.github.johnrengelman.shadow'\n\nrepositories {\n  mavenCentral()\n}\n\nversion = '"
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "'\ngroup = '"
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.groupId : stack1), depth0)) != null ? stack1 : "")
    + "'\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "sourceCompatibility = '1.8'\nmainClassName = 'io.vertx.core.Launcher'\n\ndependencies {\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.dependencies : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.kotlin : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nshadowJar {\n  classifier = 'fat'\n  manifest {\n    attributes 'Main-Verticle': '"
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".MainVerticle'\n  }\n  mergeServiceFiles {\n    include 'META-INF/services/io.vertx.core.spi.VerticleFactory'\n  }\n}\n\ntask wrapper(type: Wrapper) {\n  gradleVersion = '2.13'\n}\n\neclipse {\n  classpath {\n    file.beforeMerged { cp ->\n      cp.entries.add( new org.gradle.plugins.ide.eclipse.model.SourceFolder('build/classes/java/main', null) )\n    }\n  }\n}\n";
},"useData":true})
exports['maven/pom.xml'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <description>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "</description>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <kotlin.compiler.jvmTarget>1.8</kotlin.compiler.jvmTarget>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "    <vertx.grpc.version>1.13.2</vertx.grpc.version>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    <graal.version>1.0.0-rc9</graal.version>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    <dependency>\n      <groupId>com.oracle.substratevm</groupId>\n      <artifactId>svm-driver</artifactId>\n      <version>${graal.version}</version>\n      <scope>provided</scope>\n    </dependency>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "    <dependency>\n      <groupId>"
    + ((stack1 = ((helper = (helper = helpers.groupId || (depth0 != null ? depth0.groupId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groupId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</groupId>\n      <artifactId>"
    + ((stack1 = ((helper = (helper = helpers.artifactId || (depth0 != null ? depth0.artifactId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artifactId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</artifactId>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.version : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scope : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.classifier : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </dependency>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <version>"
    + ((stack1 = ((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"version","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</version>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <scope>"
    + ((stack1 = ((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"scope","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</scope>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <classifier>"
    + ((stack1 = ((helper = (helper = helpers.classifier || (depth0 != null ? depth0.classifier : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"classifier","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</classifier>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "    <extensions>\n      <extension>\n        <groupId>kr.motd.maven</groupId>\n        <artifactId>os-maven-plugin</artifactId>\n        <version>1.4.1.Final</version>\n      </extension>\n    </extensions>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "        <plugin>\n          <groupId>org.xolstice.maven.plugins</groupId>\n          <artifactId>protobuf-maven-plugin</artifactId>\n          <version>0.5.0</version>\n          <configuration>\n            <!--\n              The version of protoc must match protobuf-java. If you don't depend on\n              protobuf-java directly, you will be transitively depending on the\n              protobuf-java version that grpc depends on.\n            -->\n            <protocArtifact>com.google.protobuf:protoc:3.6.1:exe:${os.detected.classifier}</protocArtifact>\n            <pluginId>grpc-java</pluginId>\n            <pluginArtifact>io.vertx:protoc-gen-grpc-java:${vertx.grpc.version}:exe:${os.detected.classifier}</pluginArtifact>\n          </configuration>\n          <executions>\n            <execution>\n              <id>compile</id>\n              <goals>\n                <goal>compile</goal>\n                <goal>compile-custom</goal>\n              </goals>\n            </execution>\n          </executions>\n        </plugin>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "        <plugin>\n          <artifactId>kotlin-maven-plugin</artifactId>\n          <groupId>org.jetbrains.kotlin</groupId>\n          <version>1.1.0</version>\n          <executions>\n            <execution>\n              <id>compile</id>\n              <goals>\n                <goal>compile</goal>\n              </goals>\n              <configuration>\n                <sourceDirs>\n                  <sourceDir>${project.basedir}/src/main/kotlin</sourceDir>\n                  <sourceDir>${project.basedir}/src/main/java</sourceDir>\n                </sourceDirs>\n              </configuration>\n            </execution>\n            <execution>\n              <id>test-compile</id>\n              <goals>\n                <goal>test-compile</goal>\n              </goals>\n              <configuration>\n                <sourceDirs>\n                  <sourceDir>${project.basedir}/src/test/kotlin</sourceDir>\n                  <sourceDir>${project.basedir}/src/test/java</sourceDir>\n                </sourceDirs>\n              </configuration>\n            </execution>\n          </executions>\n        </plugin>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "      <plugin>\n        <artifactId>kotlin-maven-plugin</artifactId>\n        <groupId>org.jetbrains.kotlin</groupId>\n      </plugin>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "      <plugin>\n        <artifactId>maven-jar-plugin</artifactId>\n        <version>2.4</version>\n        <executions>\n          <execution>\n            <id>service-api</id>\n            <goals>\n              <goal>jar</goal>\n            </goals>\n            <phase>package</phase>\n            <configuration>\n              <classifier>api</classifier>\n              <excludes>\n                <exclude>**/impl/**</exclude>\n                <exclude>**/MainVerticle.class</exclude>\n                <exclude>**/package-info.class</exclude>\n              </excludes>\n            </configuration>\n          </execution>\n          <execution>\n            <id>jar</id>\n            <goals>\n              <goal>jar</goal>\n            </goals>\n            <phase>package</phase>\n          </execution>\n        </executions>\n      </plugin>\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-jar-plugin</artifactId>\n        <version>3.0.2</version>\n        <configuration>\n          <archive>\n            <manifest>\n              <mainClass>${main.verticle}</mainClass>\n            </manifest>\n          </archive>\n        </configuration>\n      </plugin>\n      <plugin>\n        <groupId>com.oracle.substratevm</groupId>\n        <artifactId>native-image-maven-plugin</artifactId>\n        <version>${graal.version}</version>\n        <executions>\n          <execution>\n            <goals>\n              <goal>native-image</goal>\n            </goals>\n            <phase>package</phase>\n          </execution>\n        </executions>\n      </plugin>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-shade-plugin</artifactId>\n        <version>2.3</version>\n        <executions>\n          <execution>\n            <phase>package</phase>\n            <goals>\n              <goal>shade</goal>\n            </goals>\n            <configuration>\n              <filters>\n                <filter>\n                  <excludes>\n                    <exclude>META-INF/*.SF</exclude>\n                    <exclude>META-INF/*.DSA</exclude>\n                    <exclude>META-INF/*.RSA</exclude>\n                  </excludes>\n                </filter>\n              </filters>\n              <transformers>\n                <transformer implementation=\"org.apache.maven.plugins.shade.resource.ManifestResourceTransformer\">\n                  <manifestEntries>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.graalNativeImage : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + "                  </manifestEntries>\n                </transformer>\n                <transformer implementation=\"org.apache.maven.plugins.shade.resource.AppendingTransformer\">\n                  <resource>META-INF/services/io.vertx.core.spi.VerticleFactory</resource>\n                </transformer>\n              </transformers>\n              <artifactSet>\n              </artifactSet>\n              <outputFile>${project.build.directory}/${project.artifactId}-${project.version}-fat.jar</outputFile>\n            </configuration>\n          </execution>\n        </executions>\n      </plugin>\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "                    <Main-Class>${main.verticle}</Main-Class>\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "                    <Main-Class>io.vertx.core.Launcher</Main-Class>\n                    <Main-Verticle>${main.verticle}</Main-Verticle>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.groupId : stack1), depth0)) != null ? stack1 : "")
    + "</groupId>\n  <artifactId>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "</artifactId>\n  <version>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "</version>\n\n  <name>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "</name>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <properties>\n    <main.verticle>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.main : stack1), depth0)) != null ? stack1 : "")
    + "</main.verticle>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n    <maven.compiler.target>1.8</maven.compiler.target>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.testSource>1.8</maven.compiler.testSource>\n    <maven.compiler.testTarget>1.8</maven.compiler.testTarget>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.kotlin : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-grpc"] : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.graalNativeImage : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </properties>\n\n  <dependencies>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.graalNativeImage : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.dependencies : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </dependencies>\n\n  <build>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-grpc"] : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <pluginManagement>\n      <plugins>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-grpc"] : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.kotlin : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </plugins>\n    </pluginManagement>\n\n    <plugins>\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.kotlin : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-service-proxy"] : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.graalNativeImage : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.graalNativeImage : stack1),{"name":"unless","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </plugins>\n  </build>\n</project>\n";
},"useData":true})
exports['openapi-client/Operations.md'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return " * ["
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "](#"
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + ")\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "## <a name=\""
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "\"></a>"
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " - "
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(depth0 != null ? depth0.method : depth0),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = (helpers.or || (depth0 && depth0.or) || alias2).call(alias1,(helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.path : stack1),{"name":"nonEmpty","hash":{},"data":data}),(helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.cookie : stack1),{"name":"nonEmpty","hash":{},"data":data}),(helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.query : stack1),{"name":"nonEmpty","hash":{},"data":data}),(helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.header : stack1),{"name":"nonEmpty","hash":{},"data":data}),{"name":"or","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "### Functions\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.functions : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.security : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "\n\n"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "### Parameters\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return " * `"
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.project)) && stack1.language)) && stack1.id),(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "`: Parameter `"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "` inside path"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ". Description: "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return " * `"
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.project)) && stack1.language)) && stack1.id),(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "`: Parameter `"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "` inside cookie"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return " * `"
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.project)) && stack1.language)) && stack1.id),(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "`: Parameter `"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "` inside query"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return " * `"
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.project)) && stack1.language)) && stack1.id),(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "`: Parameter `"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "` inside header"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return " * `"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "()`: Function that sends the request with "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.json : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "Json body";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.form : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "form "
    + ((stack1 = ((helper = (helper = helpers.contentType || (depth0 != null ? depth0.contentType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"contentType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " body";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.stream : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.contentType || (depth0 != null ? depth0.contentType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"contentType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " stream body";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.buffer : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.contentType || (depth0 != null ? depth0.contentType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"contentType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " buffer body";
},"28":function(container,depth0,helpers,partials,data) {
    return "empty body";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "### Security Requirements\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.security : depth0),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return " * `"
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "` provided by `attach"
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(data && data.key),{"name":"sanitize","hash":{},"data":data}),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "")
    + "Security()`;\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "# Operations\n\nDocumentation of various operations by operationId:\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.operations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.operations : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true})
exports['openapi-client/README.md'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "# "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\n\n## Introduction\nThe class `"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".ApiClient` contains all methods to consume the api. This class uses Vert.x WebClient to complete the requests. For more info give a look to [Vert.x documentation](http://vertx.io/docs/).\n\nThe generated project contains all models for requests/responses in package `"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".models`\n\n## How to do a request\nTo call an API operation you have to call the equivalent function in `"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".ApiClient`. For more informations give a look at [operations documentation](./Operations.md).\n\nDepending on request body declarations, you can have multiple functions for every operation:\n\n* `[operationId]WithEmptyBody`: Function that sends an empty body\n* `[operationId]WithJson`: Function that sends a Json body. You can pass to it a [`JsonObject`](http://vertx.io/docs/apidocs/io/vertx/core/json/JsonObject.html) or a POJO. Give a look to [WebClient documentation](http://vertx.io/docs/vertx-web-client/java/#_json_bodies) for more informations\n* `[operationId]WithForm`: Function that sends a form body encoded as `application/x-www-form-urlencoded`\n* `[operationId]WithMultipartForm`: Function that sends a form body encoded as `multipart/form-data`\n* `[operationId]WithContentTypeBuffer`: Function that sends a buffer with the defined content type\n* `[operationId]WithContentTypeStream`: Function that sends a stream with the defined content type\n\nIn every case, the `Content-Type` header is automatically configured\n\nEvery operation function also attach automatically the required headers/query/cookie parameters for the required security schemes through the `attach[SecurityScheme]Security` functions.\n\nFor handling the responses, give a look at [WebClient documentation](http://vertx.io/docs/vertx-web-client/java/#_handling_http_responses).\n\n## Info\nThis project was generated by [vertx-starter](https://vertx-starter.jetdrone.xyz/) generator";
},"useData":true})
exports['npm/index.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "/// <reference types=\"@vertx/core/runtime\" />\n// @ts-check\n\n// your code goes here...\n\nvertx\n  .createHttpServer()\n  .requestHandler(function (req) {\n    req.response()\n      .putHeader(\"content-type\", \"text/plain\")\n      .end(\"Hello!\");\n  })\n  .listen(8080);\n\nconsole.log('Server listening at: http://localhost:8080/');\n";
},"useData":true})
exports['npm/index.test.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { TestSuite } from '@vertx/unit';\n\nconst suite = TestSuite.create(\"the_test_suite\");\n\nsuite.test(\"my_test_case\", function (should) {\n  var s = \"value\";\n  should.assertEquals(\"value\", s);\n});\n\nsuite.run();\n";
},"useData":true})
exports['npm/index.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "/// <reference types=\"@vertx/core/runtime\" />\n// @ts-check\n\n// your code goes here...\n\nvertx\n  .createHttpServer()\n  .requestHandler(function (req: any) {\n    req.response()\n      .putHeader(\"content-type\", \"text/plain\")\n      .end(\"Hello!\");\n  }).listen(8080);\n\nconsole.log('Listening at http://127.0.0.1:8080');\n";
},"useData":true})
exports['npm/package.json'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    \"typescript\": \"^3.0.3\",\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "    \""
    + ((stack1 = ((helper = (helper = helpers.npm || (depth0 != null ? depth0.npm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"npm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\": \"^"
    + ((stack1 = ((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\",\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "    \""
    + ((stack1 = ((helper = (helper = helpers.npm || (depth0 != null ? depth0.npm : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"npm","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\": \"^"
    + ((stack1 = ((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return ",";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "    \""
    + ((stack1 = ((helper = (helper = helpers.groupId || (depth0 != null ? depth0.groupId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groupId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ":"
    + ((stack1 = ((helper = (helper = helpers.artifactId || (depth0 != null ? depth0.artifactId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artifactId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\": \""
    + ((stack1 = ((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.scope : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.classifier : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ":"
    + ((stack1 = ((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"scope","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ":"
    + ((stack1 = ((helper = (helper = helpers.classifier || (depth0 != null ? depth0.classifier : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"classifier","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "{\n  \"name\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  \"version\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  \"description\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  \"private\": true,\n\n  \"main\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.main : stack1), depth0)) != null ? stack1 : "")
    + "\",\n\n  \"scripts\": {\n    \"postinstall\": \"vertx-scripts init\",\n    \"test\": \"vertx-scripts launcher test\",\n    \"start\": \"vertx-scripts launcher run\",\n    \"package\": \"vertx-scripts package\",\n    \"repl\": \"vertx-scripts repl\"\n  },\n\n  \"keywords\": [],\n  \"author\": \"\",\n  \"license\": \"ISC\",\n\n  \"devDependencies\": {\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.typescript : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.npmDevDependencies : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \"vertx-scripts\": \"^1.1.4\"\n  },\n\n  \"dependencies\": {\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.npmProdDependencies : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  },\n\n  \"mvnDependencies\": {\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.npmMavenDependencies : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  }\n}\n";
},"useData":true})
exports['npm/tsconfig.json'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"compilerOptions\": {\n    \"outDir\": \".\",\n    \"sourceMap\": true,\n    \"noImplicitAny\": true,\n    \"module\": \"commonjs\",\n    \"target\": \"es5\",\n    \"allowJs\": true\n  }\n}\n";
},"useData":true})
exports['npm/webpack.config.js'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "  entry: path.resolve(__dirname, 'src/main/js/index.js'),\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  entry: path.resolve(__dirname, 'src/main/ts/index.ts'),\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      { test: /\\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      { test: /\\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' }\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "// webpack.config.js\nvar path = require('path');\nconst VertxPlugin = require('webpack-vertx-plugin');\n\nvar backend = {\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.javascript : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.typescript : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  output: {\n    filename: 'main-server.js',\n    path: path.resolve(__dirname, 'src/main/resources')\n  },\n\n  module: {\n    loaders: [\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.javascript : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.typescript : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    ]\n  },\n\n  plugins: [\n    new VertxPlugin()\n  ]\n};\n\nmodule.exports = [backend];\n";
},"useData":true})
exports['sbt/build.sbt'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.core : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "  \""
    + ((stack1 = ((helper = (helper = helpers.groupId || (depth0 != null ? depth0.groupId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groupId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" % \""
    + ((stack1 = ((helper = (helper = helpers.artifactId || (depth0 != null ? depth0.artifactId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artifactId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" % \""
    + ((stack1 = ((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return ",";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "  \""
    + ((stack1 = ((helper = (helper = helpers.groupId || (depth0 != null ? depth0.groupId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groupId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" % \""
    + ((stack1 = ((helper = (helper = helpers.artifactId || (depth0 != null ? depth0.artifactId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artifactId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = container.lambda(((stack1 = (depths[1] != null ? depths[1].metadata : depths[1])) != null ? stack1.artifactSuffix : stack1), depth0)) != null ? stack1 : "")
    + "\" % \""
    + ((stack1 = ((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "import sbt.Package._\nimport sbt._\n\nscalaVersion := \"2.12.1\"\n\nlibraryDependencies ++= Seq(\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.dependencies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ")\n\npackageOptions += ManifestAttributes(\n  (\"Main-Verticle\", \"scala:"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".MainVerticle\"))\n\nassemblyMergeStrategy in assembly := {\n  case PathList(\"META-INF\", \"MANIFEST.MF\") => MergeStrategy.discard\n  case PathList(\"META-INF\", xs @ _*) => MergeStrategy.last\n  case PathList(\"META-INF\", \"io.netty.versions.properties\") => MergeStrategy.last\n  case PathList(\"codegen.json\") => MergeStrategy.discard\n  case x =>\n    val oldStrategy = (assemblyMergeStrategy in assembly).value\n    oldStrategy(x)\n}\n";
},"useData":true,"useDepths":true})
exports['stack/vertx-stack.json'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "    {\n      \"groupId\": \""
    + ((stack1 = ((helper = (helper = helpers.groupId || (depth0 != null ? depth0.groupId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"groupId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\",\n      \"artifactId\": \""
    + ((stack1 = ((helper = (helper = helpers.artifactId || (depth0 != null ? depth0.artifactId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artifactId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\",\n      \"version\": \""
    + ((stack1 = ((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\",\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.classifier : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.transitive : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      \"included\": "
    + ((stack1 = ((helper = (helper = helpers.included || (depth0 != null ? depth0.included : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"included","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    }"
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      \"classifier\": \""
    + ((stack1 = ((helper = (helper = helpers.classifier || (depth0 != null ? depth0.classifier : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"classifier","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\",\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "      \"transitive\": "
    + ((stack1 = ((helper = (helper = helpers.transitive || (depth0 != null ? depth0.transitive : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"transitive","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ",\n";
},"6":function(container,depth0,helpers,partials,data) {
    return ",";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "{\n  \"dependencies\": [\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.bom : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ]\n}\n";
},"useData":true})
exports['web+angular4/package.json'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  \"description\": \""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "{\n  \"name\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  \"version\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "\",\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"private\": true,\n\n  \"scripts\": {\n    \"test\": \"karma start src/test/ts/karma.conf.js\"\n  },\n  \"dependencies\": {\n    \"@angular/animations\": \"4.2.5\",\n    \"@angular/common\": \"4.2.5\",\n    \"@angular/compiler\": \"4.2.5\",\n    \"@angular/compiler-cli\": \"4.2.5\",\n    \"@angular/core\": \"4.2.5\",\n    \"@angular/forms\": \"4.2.5\",\n    \"@angular/http\": \"4.2.5\",\n    \"@angular/platform-browser\": \"4.2.5\",\n    \"@angular/platform-browser-dynamic\": \"4.2.5\",\n    \"@angular/platform-server\": \"4.2.5\",\n    \"@angular/router\": \"4.2.5\",\n    \"@ngtools/webpack\": \"1.5.0\",\n    \"@types/webpack-env\": \"1.13.0\",\n    \"angular2-template-loader\": \"0.6.2\",\n    \"awesome-typescript-loader\": \"3.2.1\",\n    \"bootstrap\": \"3.3.7\",\n    \"css\": \"2.2.1\",\n    \"css-loader\": \"0.28.4\",\n    \"es6-shim\": \"0.35.3\",\n    \"es6-promise\": \"^4.1.1\",\n    \"event-source-polyfill\": \"0.0.9\",\n    \"expose-loader\": \"0.7.3\",\n    \"extract-text-webpack-plugin\": \"2.1.2\",\n    \"file-loader\": \"0.11.2\",\n    \"html-loader\": \"0.4.5\",\n    \"isomorphic-fetch\": \"2.2.1\",\n    \"jquery\": \"3.2.1\",\n    \"json-loader\": \"0.5.4\",\n    \"preboot\": \"4.5.2\",\n    \"raw-loader\": \"0.5.1\",\n    \"reflect-metadata\": \"0.1.10\",\n    \"rxjs\": \"5.4.2\",\n    \"style-loader\": \"0.18.2\",\n    \"to-string-loader\": \"1.1.5\",\n    \"typescript\": \"2.4.1\",\n    \"url-loader\": \"0.5.9\",\n    \"webpack\": \"2.5.1\",\n    \"webpack-hot-middleware\": \"2.18.2\",\n    \"webpack-merge\": \"4.1.0\",\n    \"zone.js\": \"0.8.12\"\n  },\n  \"devDependencies\": {\n    \"@types/chai\": \"4.0.1\",\n    \"@types/jasmine\": \"2.5.53\",\n    \"chai\": \"4.0.2\",\n    \"jasmine-core\": \"2.6.4\",\n    \"karma\": \"1.7.0\",\n    \"karma-chai\": \"0.1.0\",\n    \"karma-chrome-launcher\": \"2.2.0\",\n    \"karma-cli\": \"1.0.1\",\n    \"karma-jasmine\": \"1.1.0\",\n    \"karma-webpack\": \"2.0.3\",\n    \"webpack-vertx-plugin\": \"0.0.5\"\n  }\n}\n";
},"useData":true})
exports['web+angular4/tsconfig.json'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"compilerOptions\": {\n    \"module\": \"es2015\",\n    \"moduleResolution\": \"node\",\n    \"target\": \"es5\",\n    \"sourceMap\": true,\n    \"experimentalDecorators\": true,\n    \"emitDecoratorMetadata\": true,\n    \"skipDefaultLibCheck\": true,\n    \"skipLibCheck\": true, // Workaround for https://github.com/angular/angular/issues/17863. Remove this if you upgrade to a fixed version of Angular.\n    \"strict\": true,\n    \"lib\": [ \"es6\", \"dom\" ],\n    \"types\": [ \"webpack-env\" ]\n  },\n  \"exclude\": [ \"bin\", \"node_modules\" ],\n  \"atom\": { \"rewriteTsconfig\": false }\n}\n";
},"useData":true})
exports['web+angular4/webpack.config.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "const path = require('path');\nconst webpack = require('webpack');\nconst merge = require('webpack-merge');\nconst AotPlugin = require('@ngtools/webpack').AotPlugin;\nconst CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;\nconst VertxPlugin = require('webpack-vertx-plugin');\n\nmodule.exports = function (env) {\n  // Configuration in common to both client-side and server-side bundles\n  const isDevBuild = !(env && env.prod);\n  const sharedConfig = {\n    stats: {modules: false},\n    context: __dirname,\n    resolve: {extensions: ['.js', '.ts']},\n    output: {\n      filename: '[name].js',\n      publicPath: 'dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix\n    },\n    module: {\n      rules: [\n        {\n          test: /\\.ts$/,\n          include: /src\\/.*\\/ts/,\n          use: isDevBuild ? ['awesome-typescript-loader?silent=true', 'angular2-template-loader'] : '@ngtools/webpack'\n        },\n        {test: /\\.html$/, use: 'html-loader?minimize=false'},\n        {test: /\\.css$/, use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize']},\n        {test: /\\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}\n      ]\n    },\n    plugins: [new CheckerPlugin()]\n  };\n\n  // Configuration for client-side bundle suitable for running in browsers\n  const clientBundleOutputDir = './src/main/resources/webroot/dist';\n  const clientBundleConfig = merge(sharedConfig, {\n    entry: {'main-client': './src/main/ts/boot.browser.ts'},\n    output: {path: path.join(__dirname, clientBundleOutputDir)},\n    plugins: [\n      new webpack.DllReferencePlugin({\n        context: __dirname,\n        manifest: require('./src/main/resources/webroot/dist/vendor-manifest.json')\n      })\n    ].concat(isDevBuild ? [\n      // Plugins that apply in development builds only\n      new webpack.SourceMapDevToolPlugin({\n        filename: '[file].map', // Remove this line if you prefer inline source maps\n        moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk\n      }),\n      new VertxPlugin({\n        fatJar: 'target/"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "-"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "-fat.jar'\n      })\n    ] : [\n      // Plugins that apply in production builds only\n      new webpack.optimize.UglifyJsPlugin(),\n      new AotPlugin({\n        tsConfigPath: './tsconfig.json',\n        entryModule: path.join(__dirname, 'src', 'main', 'ts', 'app', 'app.module.browser#AppModule'),\n        exclude: ['./**/*.server.ts']\n      }),\n      new VertxPlugin()\n    ])\n  });\n\n  return [clientBundleConfig];\n};\n";
},"useData":true})
exports['web+angular4/webpack.config.vendor.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\nconst merge = require('webpack-merge');\nconst treeShakableModules = [\n  '@angular/animations',\n  '@angular/common',\n  '@angular/compiler',\n  '@angular/core',\n  '@angular/forms',\n  '@angular/http',\n  '@angular/platform-browser',\n  '@angular/platform-browser-dynamic',\n  '@angular/router',\n  'zone.js',\n];\nconst nonTreeShakableModules = [\n  'bootstrap',\n  'bootstrap/dist/css/bootstrap.css',\n  'es6-promise',\n  'es6-shim',\n  'event-source-polyfill',\n  'jquery'\n];\nconst allModules = treeShakableModules.concat(nonTreeShakableModules);\n\nmodule.exports = (env) => {\n  const extractCSS = new ExtractTextPlugin('vendor.css');\n  const isDevBuild = !(env && env.prod);\n  const sharedConfig = {\n    stats: {modules: false},\n    resolve: {extensions: ['.js']},\n    module: {\n      rules: [\n        {test: /\\.(png|woff|woff2|eot|ttf|svg)(\\?|$)/, use: 'url-loader?limit=100000'}\n      ]\n    },\n    output: {\n      publicPath: 'dist/',\n      filename: '[name].js',\n      library: '[name]_[hash]'\n    },\n    plugins: [\n      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)\n      new webpack.ContextReplacementPlugin(/\\@angular\\b.*\\b(bundles|linker)/, path.join(__dirname, 'src', 'main', 'ts')), // Workaround for https://github.com/angular/angular/issues/11580\n      new webpack.ContextReplacementPlugin(/angular(\\\\|\\/)core(\\\\|\\/)@angular/, path.join(__dirname, 'src', 'main', 'ts')), // Workaround for https://github.com/angular/angular/issues/14898\n      new webpack.IgnorePlugin(/^vertx$/) // Workaround for https://github.com/stefanpenner/es6-promise/issues/100\n    ]\n  };\n\n  const clientBundleConfig = merge(sharedConfig, {\n    entry: {\n      // To keep development builds fast, include all vendor dependencies in the vendor bundle.\n      // But for production builds, leave the tree-shakable ones out so the AOT compiler can produce a smaller bundle.\n      vendor: isDevBuild ? allModules : nonTreeShakableModules\n    },\n    output: {path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist')},\n    module: {\n      rules: [\n        {test: /\\.css(\\?|$)/, use: extractCSS.extract({use: isDevBuild ? 'css-loader' : 'css-loader?minimize'})}\n      ]\n    },\n    plugins: [\n      extractCSS,\n      new webpack.DllPlugin({\n        path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist', '[name]-manifest.json'),\n        name: '[name]_[hash]'\n      })\n    ].concat(isDevBuild ? [] : [\n      new webpack.optimize.UglifyJsPlugin()\n    ])\n  });\n\n  return [clientBundleConfig];\n};\n";
},"useData":true})
exports['web+aurelia/package.json'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\"description\": \""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\",";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "{\n  \"name\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  \"version\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  \"private\": true,\n\n  \"dependencies\": {\n    \"aurelia-bootstrapper\": \"^2.0.1\",\n    \"aurelia-fetch-client\": \"^1.0.1\",\n    \"aurelia-framework\": \"^1.1.0\",\n    \"aurelia-loader-webpack\": \"^2.0.0\",\n    \"aurelia-pal\": \"^1.3.0\",\n    \"aurelia-router\": \"^1.2.1\",\n    \"bootstrap\": \"^3.3.7\",\n    \"isomorphic-fetch\": \"^2.2.1\",\n    \"jquery\": \"^3.2.1\"\n  },\n  \"devDependencies\": {\n    \"babel-core\": \"^6.26.0\",\n    \"babel-loader\": \"^7.1.2\",\n    \"babel-plugin-transform-runtime\": \"^6.23.0\",\n    \"babel-plugin-transform-decorators-legacy\" : \"^1.3.4\",\n    \"babel-preset-env\": \"^1.6.0\",\n    \"babel-preset-stage-2\": \"^6.24.1\",\n    \"aurelia-webpack-plugin\": \"^2.0.0-rc.2\",\n    \"css-loader\": \"^0.28.0\",\n    \"extract-text-webpack-plugin\": \"^2.1.0\",\n    \"file-loader\": \"^0.11.1\",\n    \"html-loader\": \"^0.4.5\",\n    \"json-loader\": \"^0.5.4\",\n    \"style-loader\": \"^0.16.1\",\n    \"url-loader\": \"^0.5.8\",\n    \"webpack\": \"^2.3.3\",\n    \"webpack-hot-middleware\": \"^2.18.0\",\n    \"webpack-vertx-plugin\": \"0.0.5\"\n  }\n}\n";
},"useData":true})
exports['web+aurelia/webpack.config.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "const path = require('path');\nconst webpack = require('webpack');\nconst {AureliaPlugin} = require('aurelia-webpack-plugin');\nconst bundleOutputDir = './src/main/resources/webroot/dist';\nconst VertxPlugin = require('webpack-vertx-plugin');\n\nmodule.exports = (env) => {\n  const isDevBuild = !(env && env.prod);\n  return [{\n    stats: {modules: false},\n    entry: {'app': 'aurelia-bootstrapper'},\n    resolve: {\n      extensions: ['.js'],\n      modules: ['src/main/js', 'node_modules'],\n    },\n    output: {\n      path: path.resolve(bundleOutputDir),\n      publicPath: 'dist/',\n      filename: '[name].js'\n    },\n    module: {\n      rules: [\n        {test: /\\.js$/i, include: /src\\/.+\\/js/, use: 'babel-loader'},\n        {test: /\\.html$/i, use: 'html-loader'},\n        {test: /\\.css$/i, use: isDevBuild ? 'css-loader' : 'css-loader?minimize'},\n        {test: /\\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}\n      ]\n    },\n    plugins: [\n      new webpack.DefinePlugin({IS_DEV_BUILD: JSON.stringify(isDevBuild)}),\n      new webpack.DllReferencePlugin({\n        context: __dirname,\n        manifest: require('./src/main/resources/webroot/dist/vendor-manifest.json')\n      }),\n      new AureliaPlugin({aureliaApp: 'boot'})\n    ].concat(isDevBuild ? [\n      new webpack.SourceMapDevToolPlugin({\n        filename: '[file].map', // Remove this line if you prefer inline source maps\n        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]')  // Point sourcemap entries to the original file locations on disk\n      }),\n      new VertxPlugin({\n        fatJar: 'target/"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "-"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "-fat.jar'\n      })\n    ] : [\n      new webpack.optimize.UglifyJsPlugin(),\n      new VertxPlugin()\n    ])\n  }];\n};\n";
},"useData":true})
exports['web+aurelia/webpack.config.vendor.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "var path = require('path');\nvar webpack = require('webpack');\nvar ExtractTextPlugin = require('extract-text-webpack-plugin');\nvar extractCSS = new ExtractTextPlugin('vendor.css');\n\nmodule.exports = ({prod} = {}) => {\n  const isDevBuild = !prod;\n\n  return [{\n    stats: {modules: false},\n    resolve: {\n      extensions: ['.js']\n    },\n    module: {\n      loaders: [\n        {test: /\\.(png|woff|woff2|eot|ttf|svg)(\\?|$)/, loader: 'url-loader?limit=100000'},\n        {test: /\\.css(\\?|$)/, loader: extractCSS.extract([isDevBuild ? 'css-loader' : 'css-loader?minimize'])}\n      ]\n    },\n    entry: {\n      vendor: [\n        'aurelia-event-aggregator',\n        'aurelia-fetch-client',\n        'aurelia-framework',\n        'aurelia-history-browser',\n        'aurelia-logging-console',\n        'aurelia-pal-browser',\n        'aurelia-polyfills',\n        'aurelia-route-recognizer',\n        'aurelia-router',\n        'aurelia-templating-binding',\n        'aurelia-templating-resources',\n        'aurelia-templating-router',\n        'bootstrap',\n        'bootstrap/dist/css/bootstrap.css',\n        'jquery'\n      ],\n    },\n    output: {\n      path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist'),\n      publicPath: 'dist/',\n      filename: '[name].js',\n      library: '[name]_[hash]',\n    },\n    plugins: [\n      extractCSS,\n      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)\n      new webpack.DllPlugin({\n        path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist', '[name]-manifest.json'),\n        name: '[name]_[hash]'\n      })\n    ].concat(isDevBuild ? [] : [\n      new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})\n    ])\n  }]\n};\n";
},"useData":true})
exports['web+knockout/package.json'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\"description\": \""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\",";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "{\n  \"name\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  \"version\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  \"private\": true,\n\n  \"devDependencies\": {\n    \"babel-core\": \"^6.26.0\",\n    \"babel-loader\": \"^7.1.2\",\n    \"babel-preset-env\": \"^1.6.0\",\n    \"bootstrap\": \"^3.3.6\",\n    \"bundle-loader\": \"^0.5.4\",\n    \"crossroads\": \"^0.12.2\",\n    \"css-loader\": \"^0.25.0\",\n    \"event-source-polyfill\": \"^0.0.7\",\n    \"extract-text-webpack-plugin\": \"^2.0.0-rc\",\n    \"file-loader\": \"^0.9.0\",\n    \"history\": \"^4.6.3\",\n    \"isomorphic-fetch\": \"^2.2.1\",\n    \"jquery\": \"^2.2.1\",\n    \"json-loader\": \"^0.5.4\",\n    \"knockout\": \"^3.4.0\",\n    \"raw-loader\": \"^0.5.1\",\n    \"style-loader\": \"^0.13.1\",\n    \"url-loader\": \"^0.5.7\",\n    \"webpack\": \"^2.2.0\",\n    \"webpack-hot-middleware\": \"^2.12.2\",\n    \"webpack-vertx-plugin\": \"0.0.5\"\n  }\n}\n";
},"useData":true})
exports['web+knockout/webpack.config.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\nconst bundleOutputDir = './src/main/resources/webroot/dist';\nconst VertxPlugin = require('webpack-vertx-plugin');\n\nmodule.exports = (env) => {\n  const isDevBuild = !(env && env.prod);\n  return [{\n    stats: {modules: false},\n    entry: {'main': './src/main/js/boot.js'},\n    resolve: {extensions: ['.js']},\n    output: {\n      path: path.join(__dirname, bundleOutputDir),\n      filename: '[name].js',\n      publicPath: 'dist/'\n    },\n    module: {\n      rules: [\n        {test: /\\.js$/, include: /src\\/.+\\/js/, use: 'babel-loader'},\n        {test: /\\.html$/, use: 'raw-loader'},\n        {\n          test: /\\.css$/,\n          use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({use: 'css-loader?minimize'})\n        },\n        {test: /\\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}\n      ]\n    },\n    plugins: [\n      new webpack.DllReferencePlugin({\n        context: __dirname,\n        manifest: require('./src/main/resources/webroot/dist/vendor-manifest.json')\n      })\n    ].concat(isDevBuild ? [\n      // Plugins that apply in development builds only\n      new webpack.SourceMapDevToolPlugin({\n        filename: '[file].map', // Remove this line if you prefer inline source maps\n        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk\n      }),\n      new VertxPlugin({\n        fatJar: 'target/"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "-"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "-fat.jar'\n      })\n    ] : [\n      // Plugins that apply in production builds only\n      new webpack.optimize.UglifyJsPlugin(),\n      new ExtractTextPlugin('site.css'),\n      new VertxPlugin()\n    ])\n  }];\n};\n";
},"useData":true})
exports['web+knockout/webpack.config.vendor.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\n\nmodule.exports = (env) => {\n  const isDevBuild = !(env && env.prod);\n  const extractCSS = new ExtractTextPlugin('vendor.css');\n  return [{\n    stats: {modules: false},\n    resolve: {\n      extensions: ['.js']\n    },\n    module: {\n      rules: [\n        {test: /\\.(png|woff|woff2|eot|ttf|svg)(\\?|$)/, use: 'url-loader?limit=100000'},\n        {test: /\\.css(\\?|$)/, use: extractCSS.extract({use: isDevBuild ? 'css-loader' : 'css-loader?minimize'})}\n      ]\n    },\n    entry: {\n      vendor: ['bootstrap', 'bootstrap/dist/css/bootstrap.css', 'knockout', 'crossroads', 'event-source-polyfill', 'history', 'isomorphic-fetch', 'jquery'],\n    },\n    output: {\n      path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist'),\n      publicPath: 'dist/',\n      filename: '[name].js',\n      library: '[name]_[hash]',\n    },\n    plugins: [\n      extractCSS,\n      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)\n      new webpack.DllPlugin({\n        path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist', '[name]-manifest.json'),\n        name: '[name]_[hash]'\n      })\n    ].concat(isDevBuild ? [] : [\n      new webpack.optimize.UglifyJsPlugin()\n    ])\n  }];\n};\n";
},"useData":true})
exports['web+react/package.json'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  \"description\": \""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "{\n  \"name\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  \"version\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "\",\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"private\": true,\n\n  \"devDependencies\": {\n    \"babel-core\": \"^6.26.0\",\n    \"babel-loader\": \"^7.1.2\",\n    \"babel-preset-env\": \"^1.6.0\",\n    \"babel-preset-react\": \"^6.24.1\",\n    \"bootstrap\": \"3.3.7\",\n    \"css-loader\": \"0.28.4\",\n    \"event-source-polyfill\": \"0.0.9\",\n    \"extract-text-webpack-plugin\": \"2.1.2\",\n    \"file-loader\": \"0.11.2\",\n    \"isomorphic-fetch\": \"2.2.1\",\n    \"jquery\": \"3.2.1\",\n    \"json-loader\": \"0.5.4\",\n    \"react\": \"15.6.1\",\n    \"react-dom\": \"15.6.1\",\n    \"react-hot-loader\": \"3.0.0-beta.7\",\n    \"react-router-dom\": \"4.1.1\",\n    \"style-loader\": \"0.18.2\",\n    \"url-loader\": \"0.5.9\",\n    \"webpack\": \"2.5.1\",\n    \"webpack-hot-middleware\": \"2.18.2\",\n    \"webpack-vertx-plugin\": \"^0.0.5\"\n  }\n}\n";
},"useData":true})
exports['web+react/webpack.config.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\nconst bundleOutputDir = './src/main/resources/webroot/dist';\nconst VertxPlugin = require('webpack-vertx-plugin');\n\nmodule.exports = (env) => {\n  const isDevBuild = !(env && env.prod);\n  return [{\n    stats: {modules: false},\n    entry: {'main': './src/main/js/boot.jsx'},\n    resolve: {extensions: ['.js', '.jsx']},\n    output: {\n      path: path.join(__dirname, bundleOutputDir),\n      filename: '[name].js',\n      publicPath: 'dist/'\n    },\n    module: {\n      rules: [\n        {test: /\\.jsx?$/, include: /src\\/.+\\/jsx?/, use: 'babel-loader'},\n        {\n          test: /\\.css$/,\n          use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({use: 'css-loader?minimize'})\n        },\n        {test: /\\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}\n      ]\n    },\n    plugins: [\n      new webpack.DllReferencePlugin({\n        context: __dirname,\n        manifest: require('./src/main/resources/webroot/dist/vendor-manifest.json')\n      })\n    ].concat(isDevBuild ? [\n      // Plugins that apply in development builds only\n      new webpack.SourceMapDevToolPlugin({\n        filename: '[file].map', // Remove this line if you prefer inline source maps\n        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk\n      }),\n      new VertxPlugin({\n        fatJar: 'target/"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "-"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "-fat.jar'\n      })\n    ] : [\n      // Plugins that apply in production builds only\n      new webpack.optimize.UglifyJsPlugin(),\n      new ExtractTextPlugin('site.css'),\n      new VertxPlugin()\n    ])\n  }];\n};\n";
},"useData":true})
exports['web+react/webpack.config.vendor.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\n\nmodule.exports = (env) => {\n  const extractCSS = new ExtractTextPlugin('vendor.css');\n  const isDevBuild = !(env && env.prod);\n  return [{\n    stats: {modules: false},\n    resolve: {\n      extensions: ['.js']\n    },\n    module: {\n      rules: [\n        {test: /\\.(png|woff|woff2|eot|ttf|svg)(\\?|$)/, use: 'url-loader?limit=100000'},\n        {test: /\\.css(\\?|$)/, use: extractCSS.extract([isDevBuild ? 'css-loader' : 'css-loader?minimize'])}\n      ]\n    },\n    entry: {\n      vendor: ['bootstrap', 'bootstrap/dist/css/bootstrap.css', 'event-source-polyfill', 'isomorphic-fetch', 'react', 'react-dom', 'react-router-dom', 'jquery'],\n    },\n    output: {\n      path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist'),\n      publicPath: 'dist/',\n      filename: '[name].js',\n      library: '[name]_[hash]',\n    },\n    plugins: [\n      extractCSS,\n      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)\n      new webpack.DllPlugin({\n        path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist', '[name]-manifest.json'),\n        name: '[name]_[hash]'\n      }),\n      new webpack.DefinePlugin({\n        'process.env.NODE_ENV': isDevBuild ? '\"development\"' : '\"production\"'\n      })\n    ].concat(isDevBuild ? [] : [\n      new webpack.optimize.UglifyJsPlugin()\n    ])\n  }];\n};\n";
},"useData":true})
exports['web+react+typescript/package.json'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"name\": \"WebApplicationBasic\",\n  \"private\": true,\n  \"version\": \"0.0.0\",\n  \"devDependencies\": {\n    \"@types/history\": \"4.6.0\",\n    \"@types/react\": \"15.0.35\",\n    \"@types/react-dom\": \"15.5.1\",\n    \"@types/react-hot-loader\": \"3.0.3\",\n    \"@types/react-router\": \"4.0.12\",\n    \"@types/react-router-dom\": \"4.0.5\",\n    \"@types/webpack-env\": \"1.13.0\",\n    \"awesome-typescript-loader\": \"3.2.1\",\n    \"bootstrap\": \"4.1.2\",\n    \"css-loader\": \"0.28.4\",\n    \"event-source-polyfill\": \"0.0.9\",\n    \"extract-text-webpack-plugin\": \"2.1.2\",\n    \"file-loader\": \"0.11.2\",\n    \"isomorphic-fetch\": \"2.2.1\",\n    \"jquery\": \"3.2.1\",\n    \"json-loader\": \"0.5.4\",\n    \"react\": \"15.6.1\",\n    \"react-dom\": \"15.6.1\",\n    \"react-hot-loader\": \"3.0.0-beta.7\",\n    \"react-router-dom\": \"4.1.1\",\n    \"style-loader\": \"0.18.2\",\n    \"typescript\": \"2.4.1\",\n    \"url-loader\": \"0.5.9\",\n    \"webpack\": \"2.5.1\",\n    \"webpack-hot-middleware\": \"2.18.2\",\n    \"webpack-vertx-plugin\": \"0.0.5\"\n  }\n}\n";
},"useData":true})
exports['web+react+typescript/tsconfig.json'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"compilerOptions\": {\n    \"baseUrl\": \".\",\n    \"module\": \"es2015\",\n    \"moduleResolution\": \"node\",\n    \"target\": \"es5\",\n    \"jsx\": \"react\",\n    \"sourceMap\": true,\n    \"skipDefaultLibCheck\": true,\n    \"strict\": true,\n    \"types\": [\"webpack-env\"]\n  },\n  \"exclude\": [\n      \"bin\",\n      \"node_modules\"\n  ]\n}\n";
},"useData":true})
exports['web+react+typescript/webpack.config.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\nconst CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;\nconst bundleOutputDir = './src/main/resources/webroot/dist';\nconst VertxPlugin = require('webpack-vertx-plugin');\n\nmodule.exports = (env) => {\n  const isDevBuild = !(env && env.prod);\n  return [{\n    stats: {modules: false},\n    entry: {'main': './src/main/ts/boot.tsx'},\n    resolve: {extensions: ['.js', '.jsx', '.ts', '.tsx']},\n    output: {\n      path: path.join(__dirname, bundleOutputDir),\n      filename: '[name].js',\n      publicPath: 'dist/'\n    },\n    module: {\n      rules: [\n        {test: /\\.tsx?$/, include: /src\\/.+\\/ts/, use: 'awesome-typescript-loader?silent=true'},\n        {\n          test: /\\.css$/,\n          use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({use: 'css-loader?minimize'})\n        },\n        {test: /\\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}\n      ]\n    },\n    plugins: [\n      new CheckerPlugin(),\n      new webpack.DllReferencePlugin({\n        context: __dirname,\n        manifest: require('./src/main/resources/webroot/dist/vendor-manifest.json')\n      })\n    ].concat(isDevBuild ? [\n      // Plugins that apply in development builds only\n      new webpack.SourceMapDevToolPlugin({\n        filename: '[file].map', // Remove this line if you prefer inline source maps\n        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk\n      }),\n      new VertxPlugin({\n        fatJar: 'target/"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "-"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "-fat.jar'\n      })\n    ] : [\n      // Plugins that apply in production builds only\n      new webpack.optimize.UglifyJsPlugin(),\n      new ExtractTextPlugin('site.css'),\n      new VertxPlugin()\n    ])\n  }];\n};\n";
},"useData":true})
exports['web+react+typescript/webpack.config.vendor.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\n\nmodule.exports = (env) => {\n    const extractCSS = new ExtractTextPlugin('vendor.css');\n    const isDevBuild = !(env && env.prod);\n    return [{\n        stats: { modules: false },\n        resolve: {\n            extensions: [ '.js' ]\n        },\n        module: {\n            rules: [\n                { test: /\\.(png|woff|woff2|eot|ttf|svg)(\\?|$)/, use: 'url-loader?limit=100000' },\n                { test: /\\.css(\\?|$)/, use: extractCSS.extract([ isDevBuild ? 'css-loader' : 'css-loader?minimize' ]) }\n            ]\n        },\n        entry: {\n            vendor: ['bootstrap', 'bootstrap/dist/css/bootstrap.css', 'event-source-polyfill', 'isomorphic-fetch', 'react', 'react-dom', 'react-router-dom', 'jquery'],\n        },\n        output: {\n            path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist'),\n            publicPath: 'dist/',\n            filename: '[name].js',\n            library: '[name]_[hash]',\n        },\n        plugins: [\n            extractCSS,\n            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)\n            new webpack.DllPlugin({\n                path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist', '[name]-manifest.json'),\n                name: '[name]_[hash]'\n            }),\n            new webpack.DefinePlugin({\n                'process.env.NODE_ENV': isDevBuild ? '\"development\"' : '\"production\"'\n            })\n        ].concat(isDevBuild ? [] : [\n            new webpack.optimize.UglifyJsPlugin()\n        ])\n    }];\n};\n";
},"useData":true})
exports['web+react-redux/package.json'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"name\": \"WebApplicationBasic\",\n  \"private\": true,\n  \"version\": \"0.0.0\",\n  \"dependencies\": {\n    \"babel-core\": \"^6.26.0\",\n    \"babel-loader\": \"^7.1.2\",\n    \"babel-preset-env\": \"^1.6.0\",\n    \"babel-preset-react\": \"^6.24.1\",\n    \"bootstrap\": \"4.1.2\",\n    \"css-loader\": \"0.28.4\",\n    \"domain-task\": \"^3.0.3\",\n    \"event-source-polyfill\": \"0.0.9\",\n    \"extract-text-webpack-plugin\": \"2.1.2\",\n    \"file-loader\": \"0.11.2\",\n    \"history\": \"4.6.3\",\n    \"jquery\": \"3.2.1\",\n    \"json-loader\": \"0.5.4\",\n    \"node-noop\": \"1.0.0\",\n    \"react\": \"15.6.1\",\n    \"react-dom\": \"15.6.1\",\n    \"react-hot-loader\": \"3.0.0-beta.7\",\n    \"react-redux\": \"5.0.5\",\n    \"react-router-dom\": \"4.1.1\",\n    \"react-router-redux\": \"5.0.0-alpha.6\",\n    \"redux\": \"3.7.1\",\n    \"redux-thunk\": \"2.2.0\",\n    \"style-loader\": \"0.18.2\",\n    \"typescript\": \"2.4.1\",\n    \"url-loader\": \"0.5.9\",\n    \"webpack\": \"2.5.1\",\n    \"webpack-hot-middleware\": \"2.18.2\",\n    \"webpack-merge\": \"4.1.0\",\n    \"webpack-vertx-plugin\": \"0.0.5\"\n  }\n}\n";
},"useData":true})
exports['web+react-redux/webpack.config.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\nconst merge = require('webpack-merge');\nconst VertxPlugin = require('webpack-vertx-plugin');\n\nmodule.exports = (env) => {\n  const isDevBuild = !(env && env.prod);\n\n  // Configuration in common to both client-side and server-side bundles\n  const sharedConfig = () => ({\n    stats: {modules: false},\n    resolve: {extensions: ['.js', '.jsx']},\n    output: {\n      filename: '[name].js',\n      publicPath: 'dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix\n    },\n    module: {\n      rules: [\n        {test: /\\.jsx?$/, include: /src\\/.+\\/js/, use: 'babel-loader'},\n        {test: /\\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}\n      ]\n    },\n    plugins: []\n  });\n\n  // Configuration for client-side bundle suitable for running in browsers\n  const clientBundleOutputDir = './src/main/resources/webroot/dist';\n  const clientBundleConfig = merge(sharedConfig(), {\n    entry: {'main': './src/main/js/boot-client.jsx'},\n    module: {\n      rules: [\n        {test: /\\.css$/, use: ExtractTextPlugin.extract({use: isDevBuild ? 'css-loader' : 'css-loader?minimize'})}\n      ]\n    },\n    output: {path: path.join(__dirname, clientBundleOutputDir)},\n    plugins: [\n      new ExtractTextPlugin('site.css'),\n      new webpack.DllReferencePlugin({\n        context: __dirname,\n        manifest: require('./src/main/resources/webroot/dist/vendor-manifest.json')\n      })\n    ].concat(isDevBuild ? [\n      // Plugins that apply in development builds only\n      new webpack.SourceMapDevToolPlugin({\n        filename: '[file].map', // Remove this line if you prefer inline source maps\n        moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk\n      }),\n      new VertxPlugin({\n        fatJar: 'target/"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "-"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "-fat.jar'\n      })\n    ] : [\n      // Plugins that apply in production builds only\n      new webpack.optimize.UglifyJsPlugin(),\n      new VertxPlugin()\n    ])\n  });\n\n  return [clientBundleConfig];\n};\n";
},"useData":true})
exports['web+react-redux/webpack.config.vendor.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\nconst merge = require('webpack-merge');\n\nmodule.exports = (env) => {\n  const isDevBuild = !(env && env.prod);\n  const extractCSS = new ExtractTextPlugin('vendor.css');\n\n  const sharedConfig = {\n    stats: {modules: false},\n    resolve: {extensions: ['.js']},\n    module: {\n      rules: [\n        {test: /\\.(png|woff|woff2|eot|ttf|svg)(\\?|$)/, use: 'url-loader?limit=100000'}\n      ]\n    },\n    entry: {\n      vendor: [\n        'bootstrap',\n        'bootstrap/dist/css/bootstrap.css',\n        'domain-task',\n        'event-source-polyfill',\n        'history',\n        'react',\n        'react-dom',\n        'react-router-dom',\n        'react-redux',\n        'redux',\n        'redux-thunk',\n        'react-router-redux',\n        'jquery'\n      ],\n    },\n    output: {\n      publicPath: 'dist/',\n      filename: '[name].js',\n      library: '[name]_[hash]',\n    },\n    plugins: [\n      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)\n      new webpack.NormalModuleReplacementPlugin(/\\/iconv-loader$/, require.resolve('node-noop')), // Workaround for https://github.com/andris9/encoding/issues/16\n      new webpack.DefinePlugin({\n        'process.env.NODE_ENV': isDevBuild ? '\"development\"' : '\"production\"'\n      })\n    ]\n  };\n\n  const clientBundleConfig = merge(sharedConfig, {\n    output: {path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist')},\n    module: {\n      rules: [\n        {test: /\\.css(\\?|$)/, use: extractCSS.extract({use: isDevBuild ? 'css-loader' : 'css-loader?minimize'})}\n      ]\n    },\n    plugins: [\n      extractCSS,\n      new webpack.DllPlugin({\n        path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist', '[name]-manifest.json'),\n        name: '[name]_[hash]'\n      })\n    ].concat(isDevBuild ? [] : [\n      new webpack.optimize.UglifyJsPlugin()\n    ])\n  });\n\n  return [clientBundleConfig];\n};\n";
},"useData":true})
exports['web+vue/package.json'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\"description\": \""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1), depth0)) != null ? stack1 : "")
    + "\",";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "{\n  \"name\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  \"version\": \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "\",\n  "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  \"private\": true,\n\n  \"devDependencies\": {\n    \"babel-core\": \"^6.26.0\",\n    \"babel-loader\": \"^7.1.2\",\n    \"babel-plugin-transform-runtime\": \"^6.23.0\",\n    \"babel-plugin-transform-decorators-legacy\" : \"^1.3.4\",\n    \"babel-preset-env\": \"^1.6.0\",\n    \"babel-preset-stage-2\": \"^6.24.1\",\n    \"bootstrap\": \"^3.3.6\",\n    \"css-loader\": \"^0.25.0\",\n    \"event-source-polyfill\": \"^0.0.7\",\n    \"extract-text-webpack-plugin\": \"^2.0.0-rc\",\n    \"file-loader\": \"^0.9.0\",\n    \"isomorphic-fetch\": \"^2.2.1\",\n    \"jquery\": \"^3.1.1\",\n    \"style-loader\": \"^0.13.1\",\n    \"url-loader\": \"^0.5.7\",\n    \"vue\": \"^2.2.2\",\n    \"vue-loader\": \"^11.1.4\",\n    \"vue-property-decorator\": \"^5.0.1\",\n    \"vue-router\": \"^2.3.0\",\n    \"vue-template-compiler\": \"^2.2.2\",\n    \"webpack\": \"^2.2.0\",\n    \"webpack-hot-middleware\": \"^2.12.2\",\n    \"webpack-vertx-plugin\": \"^0.0.5\"\n  }\n}\n";
},"useData":true})
exports['web+vue/webpack.config.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\nconst bundleOutputDir = './src/main/resources/webroot/dist';\nconst VertxPlugin = require('webpack-vertx-plugin');\n\nmodule.exports = (env) => {\n  const isDevBuild = !(env && env.prod);\n\n  return [{\n    stats: {modules: false},\n    context: __dirname,\n    resolve: {extensions: ['.js']},\n    entry: {'main': './src/main/js/boot.js'},\n    module: {\n      rules: [\n        {test: /\\.vue\\.html$/, include: /src\\/.+\\/js/, loader: 'vue-loader'},\n        {test: /\\.js$/, include: /src\\/.+\\/js/, use: 'babel-loader'},\n        {\n          test: /\\.css$/,\n          use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({use: 'css-loader?minimize'})\n        },\n        {test: /\\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}\n      ]\n    },\n    output: {\n      path: path.join(__dirname, bundleOutputDir),\n      filename: '[name].js',\n      publicPath: 'dist/'\n    },\n    plugins: [\n      new webpack.DefinePlugin({\n        'process.env': {\n          NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')\n        }\n      }),\n      new webpack.DllReferencePlugin({\n        context: __dirname,\n        manifest: require('./src/main/resources/webroot/dist/vendor-manifest.json')\n      })\n    ].concat(isDevBuild ? [\n      // Plugins that apply in development builds only\n      new webpack.SourceMapDevToolPlugin({\n        filename: '[file].map', // Remove this line if you prefer inline source maps\n        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk\n      }),\n      new VertxPlugin({\n        fatJar: 'target/"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "-"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.version : stack1), depth0)) != null ? stack1 : "")
    + "-fat.jar'\n      })\n    ] : [\n      // Plugins that apply in production builds only\n      new webpack.optimize.UglifyJsPlugin(),\n      new ExtractTextPlugin('site.css'),\n      new VertxPlugin()\n    ])\n  }];\n};\n";
},"useData":true})
exports['web+vue/webpack.config.vendor.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "const path = require('path');\nconst webpack = require('webpack');\nconst ExtractTextPlugin = require('extract-text-webpack-plugin');\n\nmodule.exports = (env) => {\n  const extractCSS = new ExtractTextPlugin('vendor.css');\n  const isDevBuild = !(env && env.prod);\n  return [{\n    stats: {modules: false},\n    resolve: {extensions: ['.js']},\n    module: {\n      rules: [\n        {test: /\\.(png|woff|woff2|eot|ttf|svg)(\\?|$)/, use: 'url-loader?limit=100000'},\n        {test: /\\.css(\\?|$)/, use: extractCSS.extract({use: isDevBuild ? 'css-loader' : 'css-loader?minimize'})}\n      ]\n    },\n    entry: {\n      vendor: [\n        'bootstrap',\n        'bootstrap/dist/css/bootstrap.css',\n        'event-source-polyfill',\n        'isomorphic-fetch',\n        'jquery',\n        'vue',\n        'vue-router'\n      ],\n    },\n    output: {\n      path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist'),\n      publicPath: 'dist/',\n      filename: '[name].js',\n      library: '[name]_[hash]'\n    },\n    plugins: [\n      extractCSS,\n      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)\n      new webpack.DefinePlugin({\n        'process.env.NODE_ENV': isDevBuild ? '\"development\"' : '\"production\"'\n      }),\n      new webpack.DllPlugin({\n        path: path.join(__dirname, 'src', 'main', 'resources', 'webroot', 'dist', '[name]-manifest.json'),\n        name: '[name]_[hash]'\n      })\n    ].concat(isDevBuild ? [] : [\n      new webpack.optimize.UglifyJsPlugin()\n    ])\n  }];\n};\n";
},"useData":true})
exports['sbt/project/Build.scala'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import sbt.Keys._\nimport sbt._\n\nobject Build extends AutoPlugin {\n\n  override def trigger = allRequirements\n\n  override def projectSettings =\n    Vector(\n      scalaVersion := \"2.12.1\",\n      scalacOptions ++= Vector(\n        \"-unchecked\",\n        \"-deprecation\",\n        \"-language:_\",\n        \"-target:jvm-1.8\",\n        \"-encoding\", \"UTF-8\"\n      ),\n      mainClass := Some(\"io.vertx.core.Launcher\"),\n      unmanagedSourceDirectories in Compile := Vector(scalaSource.in(Compile).value),\n      unmanagedSourceDirectories in Test := Vector(scalaSource.in(Test).value),\n      initialCommands in console := \"\"\"|import io.vertx.lang.scala._\n                                       |import io.vertx.scala.core._\n                                       |import io.vertx.scala.sbt._\n                                       |import scala.concurrent.Future\n                                       |import scala.concurrent.Promise\n                                       |import scala.util.Success\n                                       |import scala.util.Failure\n                                       |val vertx = Vertx.vertx\n                                       |implicit val executionContext = io.vertx.lang.scala.VertxExecutionContext(vertx.getOrCreateContext)\n                                       |\"\"\".stripMargin\n    )\n}\n";
},"useData":true})
exports['sbt/project/build.properties'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "sbt.version = 0.13.13\n";
},"useData":true})
exports['sbt/project/plugins.sbt'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "addSbtPlugin(\"com.eed3si9n\"      % \"sbt-assembly\"        % \"0.14.3\")\naddSbtPlugin(\"com.geirsson\"      % \"sbt-scalafmt\"        % \"0.5.5\")\naddSbtPlugin(\"org.scoverage\"     % \"sbt-scoverage\"       % \"1.5.0\")\naddSbtPlugin(\"net.virtual-void\"  % \"sbt-dependency-graph\"% \"0.8.2\")\n";
},"useData":true})
exports['graal-nativeimage/src/main/java/SVMSubstitutions.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "      RuntimeReflection.register(io.netty.channel.socket.nio.NioServerSocketChannel.class.getDeclaredConstructor());\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "import com.oracle.svm.core.annotate.*;\nimport org.graalvm.nativeimage.*;\n\nimport io.netty.util.internal.logging.*;\nimport io.vertx.core.Vertx;\nimport io.vertx.core.dns.AddressResolverOptions;\nimport io.vertx.core.impl.resolver.DefaultResolverProvider;\nimport io.vertx.core.spi.resolver.ResolverProvider;\n\n/**\n * This substitution avoid having loggers added to the build\n */\n@TargetClass(className = \"io.netty.util.internal.logging.InternalLoggerFactory\")\nfinal class TargetInternalLoggerFactory {\n  @Substitute\n  private static InternalLoggerFactory newDefaultFactory(String name) {\n    return JdkLoggerFactory.INSTANCE;\n  }\n}\n\n/**\n * This substitution allows the usage of platform specific code to do low level buffer related tasks\n */\n@TargetClass(className = \"io.netty.util.internal.CleanerJava6\")\nfinal class TargetCleanerJava6 {\n  @Alias\n  @RecomputeFieldValue(kind = RecomputeFieldValue.Kind.FieldOffset, declClassName = \"java.nio.DirectByteBuffer\", name = \"cleaner\")\n  private static long CLEANER_FIELD_OFFSET;\n}\n\n/**\n * This substitution allows the usage of platform specific code to do low level buffer related tasks\n */\n@TargetClass(className = \"io.netty.util.internal.PlatformDependent0\")\nfinal class TargetPlatformDependent0 {\n  @Alias\n  @RecomputeFieldValue(kind = RecomputeFieldValue.Kind.FieldOffset, declClassName = \"java.nio.Buffer\", name = \"address\")\n  private static long ADDRESS_FIELD_OFFSET;\n}\n\n/**\n * This substitution allows the usage of platform specific code to do low level buffer related tasks\n */\n@TargetClass(className = \"io.netty.util.internal.shaded.org.jctools.util.UnsafeRefArrayAccess\")\nfinal class TargetUnsafeRefArrayAccess {\n  @Alias\n  @RecomputeFieldValue(kind = RecomputeFieldValue.Kind.ArrayIndexShift, declClass = Object[].class)\n  public static int REF_ELEMENT_SHIFT;\n}\n\n/**\n * This substitution forces the usage of the blocking DNS resolver\n */\n@TargetClass(className = \"io.vertx.core.spi.resolver.ResolverProvider\")\nfinal class TargetResolverProvider {\n\n  @Substitute\n  public static ResolverProvider factory(Vertx vertx, AddressResolverOptions options) {\n    return new DefaultResolverProvider();\n  }\n}\n\n@AutomaticFeature\nclass RuntimeReflectionRegistrationFeature implements Feature {\n  public void beforeAnalysis(BeforeAnalysisAccess access) {\n    try {\n      RuntimeReflection.register(java.util.LinkedHashMap.class.getDeclaredConstructor());\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-grpc"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    } catch (NoSuchMethodException e) {\n      throw new RuntimeException(e);\n    }\n  }\n}\n";
},"useData":true})
exports['openapi/src/main/resources/openapi.json'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.openapi : stack1)) != null ? stack1.original : stack1),2,{"name":"stringify","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true})
exports['npm/src/main/js/index.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "// your code goes here...\nvertx.createHttpServer()\n  .requestHandler(function (req) {\n    req.response()\n      .putHeader(\"content-type\", \"text/plain\")\n      .end(\"Hello from Vert.x!\");\n}).listen(8080);\n\nconsole.log('Listening at http://127.0.0.1:8080');\n";
},"useData":true})
exports['npm/src/main/ts/index.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "// your code goes here...\ndeclare var vertx: any;\n\nvertx.createHttpServer()\n  .requestHandler(function (req: any) {\n    req.response()\n      .putHeader(\"content-type\", \"text/plain\")\n      .end(\"Hello from Vert.x!\");\n}).listen(8080);\n\nconsole.log('Listening at http://127.0.0.1:8080');\n";
},"useData":true})
exports['verticle/src/main/resources/main_verticle.groovy'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "import java.time.Instant\n\nimport io.vertx.ext.web.Router\nimport io.vertx.ext.web.handler.StaticHandler\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nimport static java.time.temporal.ChronoUnit.DAYS\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "import io.vertx.ext.web.templ.HandlebarsTemplateEngine\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "import xyz.jetdrone.vertx.hot.reload.HotReload\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "def router = Router.router(vertx)\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nrouter.get(\"/\").handler({ ctx ->\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "})\n\n// the example weather API\ndef SUMMARIES = [\"Freezing\", \"Bracing\", \"Chilly\", \"Cool\", \"Mild\", \"Warm\", \"Balmy\", \"Hot\", \"Sweltering\", \"Scorching\"]\n\nrouter.get(\"/api/weather-forecasts\").handler({ ctx ->\n  def response = [\n  ]\n  def now = Instant.now()\n\n  for (def i = 1; i <= 5; i++) {\n    def forecast = [\n      dateFormatted: now.plus(i, DAYS) as String,\n      temperatureC: -20 + Math.random() * 35,\n      summary: SUMMARIES[Math.random() * SUMMARIES.size() as int]\n    ]\n\n    forecast.temperatureF = 32 + (forecast.temperatureC / 0.5556d)\n\n    response.add(forecast)\n  }\n\n  ctx.response()\n    .putHeader(\"Content-Type\", \"application/json\")\n    .end(groovy.json.JsonOutput.toJson(response))\n})\n\n// Serve the static resources\nrouter.route().handler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + ")\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "def engine = HandlebarsTemplateEngine.create()\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "// development hot reload\nrouter.get().handler(HotReload.create())\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "  // we define a hardcoded title for our application\n  ctx.put(\"title\", \"Home Page\")\n  ctx.put(\"hotreload\", System.getenv(\"VERTX_HOT_RELOAD\"))\n\n  engine.render(ctx, \"templates\", \"/index.hbs\", { res ->\n    if (res.succeeded()) {\n      ctx.response().end(res.result())\n    } else {\n      ctx.fail(res.cause())\n    }\n  })\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "  ctx.response()\n    .putHeader(\"content-type\", \"text/plain\")\n    .end(\"Hello from Vert.x!\")\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "HotReload.createStaticHandler()";
},"17":function(container,depth0,helpers,partials,data) {
    return "StaticHandler.create()";
},"19":function(container,depth0,helpers,partials,data) {
    return "router.&accept";
},"21":function(container,depth0,helpers,partials,data) {
    return "{ req ->\n  req.response()\n    .putHeader(\"content-type\", \"text/plain\")\n    .end(\"Hello from Vert.x!\")\n}";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n// your code goes here...\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nvertx.createHttpServer().requestHandler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + ").listen(8080, { res ->\n  if (res.failed()) {\n    res.cause().printStackTrace()\n  } else {\n    println(\"Server listening at: http://localhost:8080/\")\n  }\n})\n";
},"useData":true})
exports['verticle/src/main/resources/main_verticle.js'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "var Router = require(\"vertx-web-js/router\");\nvar StaticHandler = require(\"vertx-web-js/static_handler\");\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "var HandlebarsTemplateEngine = require(\"vertx-web-js/handlebars_template_engine\");\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "var HotReload = require(\"hotreload-js/hot_reload\");\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "var router = Router.router(vertx);\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nrouter.get(\"/\").handler(function (ctx) {\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "});\n\n// the example weather API\nvar SUMMARIES = [\"Freezing\", \"Bracing\", \"Chilly\", \"Cool\", \"Mild\", \"Warm\", \"Balmy\", \"Hot\", \"Sweltering\", \"Scorching\"];\nvar rnd = new (Java.type(\"java.util.Random\"))();\n\nrouter.get(\"/api/weather-forecasts\").handler(function (ctx) {\n  var response = [];\n\n  var now = new Date();\n\n  for (var i = 1; i <= 5; i++) {\n    now.setDate(now.getDate() + 1);\n    var forecast = {\n      \"dateFormatted\" : now.toISOString(),\n      \"temperatureC\" : -20 + Math.random() * 35,\n      \"summary\" : SUMMARIES[Math.random() * SUMMARIES.length]\n    };\n\n    forecast.temperatureF = 32 + (forecast.temperatureC / 0.5556);\n\n    response.push(forecast);\n  }\n\n  ctx.response()\n    .putHeader(\"Content-Type\", \"application/json\")\n    .end(JSON.stringify(response));\n});\n\n// Serve the static resources\nrouter.route().handler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + ");\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "var engine = HandlebarsTemplateEngine.create();\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "// development hot reload\nrouter.get().handler(HotReload.create().handle);\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "  // we define a hardcoded title for our application\n  ctx.put(\"title\", \"Home Page\");\n  ctx.put(\"hotreload\", process.env[\"VERTX_HOT_RELOAD\"]);\n\n  engine.render(ctx, \"templates\", \"/index.hbs\", function (res, res_err) {\n    if (res_err == null) {\n      ctx.response().end(res);\n    } else {\n      ctx.fail(res_err);\n    }\n  });\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "  ctx.response()\n    .putHeader(\"content-type\", \"text/plain\")\n    .end(\"Hello from Vert.x!\");\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "HotReload.createStaticHandler().handle";
},"17":function(container,depth0,helpers,partials,data) {
    return "StaticHandler.create().handle";
},"19":function(container,depth0,helpers,partials,data) {
    return "router.accept";
},"21":function(container,depth0,helpers,partials,data) {
    return "function (req) {\n  req.response()\n    .putHeader(\"content-type\", \"text/plain\")\n    .end(\"Hello from Vert.x!\")\n}";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n// your code goes here...\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "vertx.createHttpServer().requestHandler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + ").listen(8080, function (res, res_err) {\n  if (res_err != null) {\n    res_err.printStackTrace();\n  } else {\n    console.log(\"Server listening at: http://localhost:8080/\");\n  }\n});\n";
},"useData":true})
exports['verticle/src/main/resources/main_verticle.rb'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "require 'date'\n\nrequire 'vertx-web/router'\nrequire 'vertx-web/static_handler'\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "require 'vertx-web/handlebars_template_engine'\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "require 'hotreload/hot_reload'\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "router = VertxWeb::Router.router($vertx)\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nrouter.get(\"/\").handler() { |ctx|\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "}\n\n# the example weather API\nSUMMARIES = [\"Freezing\", \"Bracing\", \"Chilly\", \"Cool\", \"Mild\", \"Warm\", \"Balmy\", \"Hot\", \"Sweltering\", \"Scorching\"]\n\nrouter.get(\"/api/weather-forecasts\").handler() { |ctx|\n  response = []\n  now = Date.today\n\n  i = 1\n  while (i <= 5)\n    now += 1\n    forecast = {\n      'dateFormatted' => now.strftime('%F'),\n      'temperatureC' => -20 + rand(35),\n      'summary' => SUMMARIES[rand(SUMMARIES.length)]\n    }\n\n    forecast['temperatureF'] = 32 + (forecast['temperatureC'] / 0.5556)\n\n    response.push(forecast)\n    i+=1\n  end\n\n  ctx.response().put_header(\"Content-Type\", \"application/json\").end(JSON.generate(response))\n}\n\n# Serve the static resources\nrouter.route().handler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + ")\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "engine = VertxWeb::HandlebarsTemplateEngine.create()\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "# development hot reload\nrouter.get().handler(&Hotreload::HotReload.create().method(:handle))\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "  # we define a hardcoded title for our application\n  ctx.put(\"title\", \"Home Page\")\n  ctx.put(\"hotreload\", System.getenv(\"VERTX_HOT_RELOAD\"))\n\n  engine.render(ctx, \"templates\", \"/index.hbs\") { |res_err,res|\n    if (res_err == nil)\n      ctx.response().end(res)\n    else\n      ctx.fail(res_err)\n    end\n  }\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "  ctx.response()\n    .putHeader(\"content-type\", \"text/plain\")\n    .end(\"Hello from Vert.x!\")\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "&Hotreload::HotReload.create_static_handler().method(:handle)";
},"17":function(container,depth0,helpers,partials,data) {
    return "&VertxWeb::StaticHandler.create().method(:handle)";
},"19":function(container,depth0,helpers,partials,data) {
    return "&router.method(:accept))";
},"21":function(container,depth0,helpers,partials,data) {
    return ") { |req|\n  req.response()\n    .putHeader(\"content-type\", \"text/plain\")\n    .end(\"Hello from Vert.x!\")\n}";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n# your code goes here...\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nhttp_server = $vertx.create_http_server()\n\nhttp_server.request_handler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "\n\nhttp_server.listen(8080) { |res_err,res|\n  if (res_err != nil)\n    res_err.print_stack_trace()\n  else\n    puts \"Server listening at: http://localhost:8080/\"\n  end\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/boot.browser.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import 'reflect-metadata';\nimport 'zone.js';\nimport 'bootstrap';\nimport { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { AppModule } from './app/app.module.browser';\n\nif (module.hot) {\n    module.hot.accept();\n    module.hot.dispose(() => {\n        // Before restarting the app, we create a new root element and dispose the old one\n        const oldRootElem = document.querySelector('app');\n        const newRootElem = document.createElement('app');\n        oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);\n        modulePromise.then(appModule => appModule.destroy());\n    });\n} else {\n    enableProdMode();\n}\n\n// Note: @ng-tools/webpack looks for the following expression when performing production\n// builds. Don't change how this line looks, otherwise you may break tree-shaking.\nconst modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);\n";
},"useData":true})
exports['web+angular4/src/test/ts/boot-tests.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "// Load required polyfills and testing libraries\nimport 'reflect-metadata';\nimport 'zone.js';\nimport 'zone.js/dist/long-stack-trace-zone';\nimport 'zone.js/dist/proxy.js';\nimport 'zone.js/dist/sync-test';\nimport 'zone.js/dist/jasmine-patch';\nimport 'zone.js/dist/async-test';\nimport 'zone.js/dist/fake-async-test';\nimport * as testing from '@angular/core/testing';\nimport * as testingBrowser from '@angular/platform-browser-dynamic/testing';\n\n// There's no typing for the `__karma__` variable. Just declare it as any\ndeclare var __karma__: any;\ndeclare var require: any;\n\n// Prevent Karma from running prematurely\n__karma__.loaded = function () {};\n\n// First, initialize the Angular testing environment\ntesting.getTestBed().initTestEnvironment(\n    testingBrowser.BrowserDynamicTestingModule,\n    testingBrowser.platformBrowserDynamicTesting()\n);\n\n// Then we find all the tests\nconst context = require.context('../../main/ts', true, /\\.spec\\.ts$/);\n\n// And load the modules\ncontext.keys().map(context);\n\n// Finally, start Karma to run the tests\n__karma__.start();\n";
},"useData":true})
exports['web+angular4/src/test/ts/karma.conf.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "// Karma configuration file, see link for more information\n// https://karma-runner.github.io/0.13/config/configuration-file.html\n\nmodule.exports = function (config) {\n    config.set({\n        basePath: '.',\n        frameworks: ['jasmine'],\n        files: [\n            '../../main/resources/webroot/dist/vendor.js',\n            './boot-tests.ts'\n        ],\n        preprocessors: {\n            './boot-tests.ts': ['webpack']\n        },\n        reporters: ['progress'],\n        port: 9876,\n        colors: true,\n        logLevel: config.LOG_INFO,\n        autoWatch: true,\n        browsers: ['Chrome'],\n        mime: { 'application/javascript': ['ts','tsx'] },\n        singleRun: false,\n        webpack: require('../../../webpack.config.js')().filter(config => config.target !== 'node'), // Test against client bundle, because tests run in a browser\n        webpackMiddleware: { stats: 'errors-only' }\n    });\n};\n";
},"useData":true})
exports['web+aurelia/src/main/js/boot.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import 'isomorphic-fetch';\nimport { Aurelia, PLATFORM } from 'aurelia-framework';\nimport { HttpClient } from 'aurelia-fetch-client';\nimport 'bootstrap/dist/css/bootstrap.css';\nimport 'bootstrap';\n\nexport function configure(aurelia) {\n    aurelia.use.standardConfiguration();\n\n    if (IS_DEV_BUILD) {\n        aurelia.use.developmentLogging();\n    }\n\n    new HttpClient().configure(config => {\n        const baseUrl = document.getElementsByTagName('base')[0].href;\n        config.withBaseUrl(baseUrl);\n    });\n\n    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app/components/app/app')));\n}\n";
},"useData":true})
exports['web+knockout/src/main/js/boot.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import './css/site.css';\nimport 'bootstrap';\nimport * as ko from 'knockout';\nimport { createBrowserHistory } from 'history';\nimport './webpack-component-loader';\nimport AppRootComponent from './components/app-root/app-root';\nconst baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');\nconst basename = baseUrl.substring(0, baseUrl.length - 1); // History component needs no trailing slash\n\n// Load and register the <app-root> component\nko.components.register('app-root', AppRootComponent);\n\n// Tell Knockout to start up an instance of your application\nko.applyBindings({ history: createBrowserHistory({ basename }), basename });\n\n// Basic hot reloading support. Automatically reloads and restarts the Knockout app each time\n// you modify source files. This will not preserve any application state other than the URL.\nif (module.hot) {\n    module.hot.accept();\n    module.hot.dispose(() => ko.cleanNode(document.body));\n}\n";
},"useData":true})
exports['web+knockout/src/main/js/router.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as ko from 'knockout';\nimport * as History from 'history';\nconst $ = require('jquery');\nconst crossroads = require('crossroads');\n\n// This module configures crossroads.js, a routing library. If you prefer, you\n// can use any other routing library (or none at all) as Knockout is designed to\n// compose cleanly with external libraries.\n//\n// You *don't* have to follow the pattern established here (each route entry\n// specifies a 'page', which is a Knockout component) - there's nothing built into\n// Knockout that requires or even knows about this technique. It's just one of\n// many possible ways of setting up client-side routes.\nexport class Router {\n\n  constructor(history, routes, basename) {\n    this.currentRoute = ko.observable({});\n    this.history = history;\n    // Reset and configure Crossroads so it matches routes and updates this.currentRoute\n    crossroads.removeAllRoutes();\n    crossroads.resetState();\n    crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;\n    routes.forEach(route => {\n      crossroads.addRoute(route.url, requestParams => {\n        this.currentRoute(ko.utils.extend(requestParams, route.params));\n      });\n    });\n\n    // Make history.js watch for navigation and notify Crossroads\n    this.disposeHistory = history.listen(location => crossroads.parse(location.pathname));\n    this.clickEventListener = evt => {\n      let target = evt.currentTarget;\n      if (target && target.tagName === 'A') {\n        let href = target.getAttribute('href');\n        if (href && href.indexOf(basename + '/') === 0) {\n          const hrefAfterBasename = href.substring(basename.length);\n          history.push(hrefAfterBasename);\n          evt.preventDefault();\n        }\n      }\n    };\n    $(document).on('click', 'a', this.clickEventListener);\n\n    // Initialize Crossroads with starting location\n    // Need to cast history to 'any' because @types/history is out-of-date\n    crossroads.parse((history).location.pathname);\n  }\n\n  link(url) {\n    return this.history.createHref({pathname: url});\n  }\n\n  dispose() {\n    this.disposeHistory();\n    $(document).off('click', 'a', this.clickEventListener);\n  }\n}\n";
},"useData":true})
exports['web+knockout/src/main/js/webpack-component-loader.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as ko from 'knockout';\n\n// This Knockout component loader integrates with Webpack's lazy-loaded bundle feature.\n// Having this means you can optionally declare components as follows:\n//   ko.components.register('my-component', require('bundle-loader?lazy!../some-path-to-a-js-or-ts-module'));\n// ... and then it will be loaded on demand instead of being loaded up front.\nko.components.loaders.unshift({\n  loadComponent: (name, componentConfig, callback) => {\n    if (typeof componentConfig === 'function') {\n      // It's a lazy-loaded Webpack bundle\n      componentConfig(loadedModule => {\n        // Handle TypeScript-style default exports\n        if (loadedModule.__esModule && loadedModule.default) {\n          loadedModule = loadedModule.default;\n        }\n\n        // Pass the loaded module to KO's default loader\n        ko.components.defaultLoader.loadComponent(name, loadedModule, callback);\n      });\n    } else {\n      // It's something else - let another component loader handle it\n      callback(null); // workaround until https://github.com/DefinitelyTyped/DefinitelyTyped/pull/17999\n    }\n  }\n});\n";
},"useData":true})
exports['web+react/src/main/js/boot.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import './css/site.css';\nimport 'bootstrap';\nimport * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nimport { AppContainer } from 'react-hot-loader';\nimport { BrowserRouter } from 'react-router-dom';\nimport * as RoutesModule from './routes';\nlet routes = RoutesModule.routes;\n\nfunction renderApp() {\n    // This code starts up the React app when it runs in a browser. It sets up the routing\n    // configuration and injects the app into a DOM element.\n    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');\n    ReactDOM.render(\n        <AppContainer>\n            <BrowserRouter children={ routes } basename={ baseUrl } />\n        </AppContainer>,\n        document.getElementById('react-app')\n    );\n}\n\nrenderApp();\n\n// Allow Hot Module Replacement\nif (module.hot) {\n    module.hot.accept('./routes', () => {\n        routes = require<typeof RoutesModule>('./routes').routes;\n        renderApp();\n    });\n}\n";
},"useData":true})
exports['web+react/src/main/js/routes.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { Route } from 'react-router-dom';\nimport { Layout } from './components/Layout';\nimport { Home } from './components/Home';\nimport { FetchData } from './components/FetchData';\nimport { Counter } from './components/Counter';\n\nexport const routes = <Layout>\n    <Route exact path='/' component={ Home } />\n    <Route path='/counter' component={ Counter } />\n    <Route path='/fetchdata' component={ FetchData } />\n</Layout>;\n";
},"useData":true})
exports['web+react+typescript/src/main/ts/boot.tsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import './css/site.css';\nimport 'bootstrap';\nimport * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nimport { AppContainer } from 'react-hot-loader';\nimport { BrowserRouter } from 'react-router-dom';\nimport * as RoutesModule from './routes';\nlet routes = RoutesModule.routes;\n\nfunction renderApp() {\n    // This code starts up the React app when it runs in a browser. It sets up the routing\n    // configuration and injects the app into a DOM element.\n    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;\n    ReactDOM.render(\n        <AppContainer>\n            <BrowserRouter children={ routes } basename={ baseUrl } />\n        </AppContainer>,\n        document.getElementById('react-app')\n    );\n}\n\nrenderApp();\n\n// Allow Hot Module Replacement\nif (module.hot) {\n    module.hot.accept('./routes', () => {\n        routes = require<typeof RoutesModule>('./routes').routes;\n        renderApp();\n    });\n}\n";
},"useData":true})
exports['web+react+typescript/src/main/ts/routes.tsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { Route } from 'react-router-dom';\nimport { Layout } from './components/Layout';\nimport { Home } from './components/Home';\nimport { FetchData } from './components/FetchData';\nimport { Counter } from './components/Counter';\n\nexport const routes = <Layout>\n    <Route exact path='/' component={ Home } />\n    <Route path='/counter' component={ Counter } />\n    <Route path='/fetchdata' component={ FetchData } />\n</Layout>;\n";
},"useData":true})
exports['web+react-redux/src/main/js/boot-client.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import './css/site.css';\nimport 'bootstrap';\nimport * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nimport { AppContainer } from 'react-hot-loader';\nimport { Provider } from 'react-redux';\nimport { ConnectedRouter } from 'react-router-redux';\nimport { createBrowserHistory } from 'history';\nimport configureStore from './configureStore';\nimport { ApplicationState }  from './store';\nimport * as RoutesModule from './routes';\nlet routes = RoutesModule.routes;\n\n// Create browser history to use in the Redux store\nconst baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');\nconst history = createBrowserHistory({ basename: baseUrl });\n\n// Get the application-wide store instance, prepopulating with state from the server where available.\nconst initialState = window.initialReduxState;\nconst store = configureStore(history, initialState);\n\nfunction renderApp() {\n    // This code starts up the React app when it runs in a browser. It sets up the routing configuration\n    // and injects the app into a DOM element.\n    ReactDOM.render(\n        <AppContainer>\n            <Provider store={ store }>\n                <ConnectedRouter history={ history } children={ routes } />\n            </Provider>\n        </AppContainer>,\n        document.getElementById('react-app')\n    );\n}\n\nrenderApp();\n\n// Allow Hot Module Replacement\nif (module.hot) {\n    module.hot.accept('./routes', () => {\n        routes = require<typeof RoutesModule>('./routes').routes;\n        renderApp();\n    });\n}\n";
},"useData":true})
exports['web+react-redux/src/main/js/boot-server.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport {Provider} from 'react-redux';\nimport {renderToString} from 'react-dom/server';\nimport {StaticRouter} from 'react-router-dom';\nimport {replace} from 'react-router-redux';\nimport {createMemoryHistory} from 'history';\nimport {routes} from './routes';\nimport configureStore from './configureStore';\n\nexport default function (params) {\n  return function (ctx) {\n    // Prepare Redux store with in-memory history, and dispatch a navigation event\n    // corresponding to the incoming URL\n    const basename = params.base.substring(0, params.base.length - 1); // Remove trailing slash\n    const urlAfterBasename = ctx.request().uri().substring(basename.length);\n\n    const store = configureStore(createMemoryHistory());\n    store.dispatch(replace(urlAfterBasename));\n\n    // Prepare an instance of the application and perform an inital render that will\n    // cause any async tasks (e.g., data access) to begin\n    const routerContext = {};\n    const app = (\n      <Provider store={store}>\n        <StaticRouter basename={basename} context={routerContext} location={ctx.request().uri()} children={routes}/>\n      </Provider>\n    );\n\n    renderToString(app);\n\n    // If there's a redirection, perform 302 status and end the request\n    if (routerContext.url) {\n      ctx.response()\n        .putHeader(\"Location\", routerContext.url)\n        .setStatusCode(302)\n        .end();\n      return;\n    }\n\n    // Once any async tasks are done, we can perform the final render\n    // We also send the redux store state, so the client can continue execution where the server left off\n    ctx\n      // we define a hardcoded title for our application\n      .put('title', 'Home Page')\n      // server side rendering\n      .put('ssr', renderToString(app));\n\n    params.engine.render(ctx, \"templates\", \"/index.hbs\", (res) => {\n      if (res.succeeded()) {\n        ctx.response()\n          .putHeader(\"Content-Type\", 'text/html')\n          .end(res.result());\n      } else {\n        ctx.fail(res.cause());\n      }\n    });\n  };\n};\n";
},"useData":true})
exports['web+react-redux/src/main/js/configureStore.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { createStore, applyMiddleware, compose, combineReducers, GenericStoreEnhancer, Store, StoreEnhancerStoreCreator, ReducersMapObject } from 'redux';\nimport thunk from 'redux-thunk';\nimport { routerReducer, routerMiddleware } from 'react-router-redux';\nimport * as StoreModule from './store';\nimport { ApplicationState, reducers } from './store';\nimport { History } from 'history';\n\nexport default function configureStore(history, initialState) {\n    // Build middleware. These are functions that can process the actions before they reach the store.\n    const windowIfDefined = typeof window === 'undefined' ? null : window;\n    // If devTools is installed, connect to it\n    const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;\n    const createStoreWithMiddleware = compose(\n        applyMiddleware(thunk, routerMiddleware(history)),\n        devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next\n    )(createStore);\n\n    // Combine all reducers and instantiate the app-wide store instance\n    const allReducers = buildRootReducer(reducers);\n    const store = createStoreWithMiddleware(allReducers, initialState);\n\n    // Enable Webpack hot module replacement for reducers\n    if (module.hot) {\n        module.hot.accept('./store', () => {\n            const nextRootReducer = require<typeof StoreModule>('./store');\n            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));\n        });\n    }\n\n    return store;\n}\n\nfunction buildRootReducer(allReducers) {\n    return combineReducers(Object.assign({}, allReducers, { routing: routerReducer }));\n}\n";
},"useData":true})
exports['web+react-redux/src/main/js/routes.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { Route } from 'react-router-dom';\nimport { Layout } from './components/Layout';\nimport Home from './components/Home';\nimport FetchData from './components/FetchData';\nimport Counter from './components/Counter';\n\nexport const routes = <Layout>\n    <Route exact path='/' component={ Home } />\n    <Route path='/counter' component={ Counter } />\n    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />\n</Layout>;\n";
},"useData":true})
exports['web+vue/src/main/js/boot.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import './css/site.css';\nimport 'bootstrap';\nimport Vue from 'vue';\nimport VueRouter from 'vue-router';\nVue.use(VueRouter);\n\nconst routes = [\n    { path: '/', component: require('./components/home/home.vue.html') },\n    { path: '/counter', component: require('./components/counter/counter.vue.html') },\n    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }\n];\n\nnew Vue({\n    el: '#app',\n    router: new VueRouter({ mode: 'history', routes: routes }),\n    render: h => h(require('./components/app/app.vue.html'))\n});\n";
},"useData":true})
exports['openapi/src/main/java/{packageDir}/ApiClient.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.openapiSpec : depth0)) != null ? stack1.components : stack1)) != null ? stack1.securitySchemes : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.and || (depth0 && depth0.and) || alias2).call(alias1,(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"http",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.scheme : depth0),"basic",{"name":"eq","hash":{},"data":data}),{"name":"and","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.or || (depth0 && depth0.or) || alias2).call(alias1,(helpers.and || (depth0 && depth0.and) || alias2).call(alias1,(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"http",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.scheme : depth0),"bearer",{"name":"eq","hash":{},"data":data}),{"name":"and","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"apiKey",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"oauth2",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"openIdConnect",{"name":"eq","hash":{},"data":data}),{"name":"or","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "\n    private String "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_username;\n    private String "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_password;\n    ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n    private String "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_token;\n    ";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.functions : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing;

  return "    /**\n     * Call "
    + ((stack1 = alias1((depths[1] != null ? depths[1].operationId : depths[1]), depth0)) != null ? stack1 : "")
    + " with "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.json : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ". "
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1].description : depths[1]),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.json : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.program(34, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "     * @param handler The handler for the asynchronous request\n     */\n    public void "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "(\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(43, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(43, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(43, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(43, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.empty : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0, blockParams, depths),"inverse":container.program(47, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ") {\n        // Check required params\n        "
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(61, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(61, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(61, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n        // Generate the uri\n        String uri = \""
    + ((stack1 = (helpers.get || (depth0 && depth0.get) || alias3).call(alias2,(helpers.split || (depth0 && depth0.split) || alias3).call(alias2,(depths[1] != null ? depths[1].path : depths[1]),"?",{"name":"split","hash":{},"data":data}),0,{"name":"get","hash":{},"data":data})) != null ? stack1 : "")
    + "\";"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.path : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n        HttpRequest request = client."
    + ((stack1 = alias1((depths[1] != null ? depths[1].method : depths[1]), depth0)) != null ? stack1 : "")
    + "(uri);\n\n        MultiMap requestCookies = MultiMap.caseInsensitiveMultiMap();\n        "
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(68, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.contentType : depth0),{"name":"if","hash":{},"fn":container.program(72, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1].security : depths[1]),{"name":"if","hash":{},"fn":container.program(74, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n        this.renderAndAttachCookieHeader(request, requestCookies);\n        "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.empty : depth0),{"name":"if","hash":{},"fn":container.program(77, data, 0, blockParams, depths),"inverse":container.program(79, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n    }\n\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "Json body";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.form : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "form "
    + ((stack1 = ((helper = (helper = helpers.contentType || (depth0 != null ? depth0.contentType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"contentType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " body";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.stream : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.contentType || (depth0 != null ? depth0.contentType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"contentType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " stream body";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.buffer : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.contentType || (depth0 != null ? depth0.contentType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"contentType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " buffer body";
},"20":function(container,depth0,helpers,partials,data) {
    return "empty body";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "\n     * "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "     * @param "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " Parameter "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " inside path\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "     * @param "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " Parameter "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " inside cookie\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "     * @param "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " Parameter "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " inside query\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "     * @param "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " Parameter "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " inside header\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "     * @param body "
    + ((stack1 = ((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " that represents the body of the request\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.form : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    return "     * @param form Form that represents the body of the request\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.stream : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "");
},"38":function(container,depth0,helpers,partials,data) {
    return "     * @param stream ReadStream that represents the body of the request\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.buffer : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    return "     * @param buffer Buffer that represents the body of the request\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        "
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,"java",(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ",\n";
},"45":function(container,depth0,helpers,partials,data) {
    return "Handler<AsyncResult<HttpResponse>> handler";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.json : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.program(50, data, 0),"data":data})) != null ? stack1 : "");
},"48":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"java",(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " body, Handler<AsyncResult<HttpResponse>> handler";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.form : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(53, data, 0),"data":data})) != null ? stack1 : "");
},"51":function(container,depth0,helpers,partials,data) {
    return "MultiMap form, Handler<AsyncResult<HttpResponse>> handler";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.stream : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.program(56, data, 0),"data":data})) != null ? stack1 : "");
},"54":function(container,depth0,helpers,partials,data) {
    return "ReadStream<Buffer> stream, Handler<AsyncResult<HttpResponse>> handler";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.buffer : depth0),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.program(45, data, 0),"data":data})) != null ? stack1 : "");
},"57":function(container,depth0,helpers,partials,data) {
    return "Buffer buffer, Handler<AsyncResult<HttpResponse>> handler";
},"59":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "if ("
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " == null) throw new NullPointerException(\"Missing parameter "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " in "
    + ((stack1 = ((helper = (helper = helpers["in"] || (depth0 != null ? depth0["in"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"in","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\");\n        ";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"63":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), buffer = 
  "\n        ";
  stack1 = ((helper = (helper = helpers["raw-helper"] || (depth0 != null ? depth0["raw-helper"] : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"raw-helper","hash":{},"fn":container.program(64, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers["raw-helper"]) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        "
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(66, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"64":function(container,depth0,helpers,partials,data) {
    return "uri = uri.replaceAll(\"\\\\{{1}([.;?*+]*([^\\\\{\\\\}.;?*+]+)[^\\\\}]*)\\\\}{1}\", \"{$2}\"); //Remove * . ; ? from url template";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "uri = uri.replace(\""
    + ((stack1 = (helpers.brace || (depth0 && depth0.brace) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"brace","hash":{},"data":data})) != null ? stack1 : "")
    + "\", this."
    + ((stack1 = ((helper = (helper = helpers.renderFunctionName || (depth0 != null ? depth0.renderFunctionName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"renderFunctionName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "(\""
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", "
    + ((stack1 = (helpers.castIfNeeded || (depth0 && depth0.castIfNeeded) || alias2).call(alias1,"java",(depth0 != null ? depth0.sanitizedName : depth0),(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"castIfNeeded","hash":{},"data":data})) != null ? stack1 : "")
    + "));\n        ";
},"68":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "if ("
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " != null) this."
    + ((stack1 = ((helper = (helper = helpers.renderFunctionName || (depth0 != null ? depth0.renderFunctionName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"renderFunctionName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "(\""
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", "
    + ((stack1 = (helpers.castIfNeeded || (depth0 && depth0.castIfNeeded) || alias2).call(alias1,"java",(depth0 != null ? depth0.sanitizedName : depth0),(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"castIfNeeded","hash":{},"data":data})) != null ? stack1 : "")
    + ", requestCookies);\n        ";
},"70":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "if ("
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " != null) this."
    + ((stack1 = ((helper = (helper = helpers.renderFunctionName || (depth0 != null ? depth0.renderFunctionName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"renderFunctionName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "(\""
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", "
    + ((stack1 = (helpers.castIfNeeded || (depth0 && depth0.castIfNeeded) || alias2).call(alias1,"java",(depth0 != null ? depth0.sanitizedName : depth0),(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"castIfNeeded","hash":{},"data":data})) != null ? stack1 : "")
    + ", request);\n        ";
},"72":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "this.addHeaderParam(\"Content-Type\", \""
    + ((stack1 = ((helper = (helper = helpers.contentType || (depth0 != null ? depth0.contentType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"contentType","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", request);\n        ";
},"74":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].security : depths[1]),{"name":"each","hash":{},"fn":container.program(75, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"75":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "this.attach"
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(data && data.key),{"name":"sanitize","hash":{},"data":data}),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "")
    + "Security(request, requestCookies);\n        ";
},"77":function(container,depth0,helpers,partials,data) {
    return "request.send(handler);";
},"79":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.json : depth0),{"name":"if","hash":{},"fn":container.program(80, data, 0, blockParams, depths),"inverse":container.program(82, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"80":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "request.sendJson("
    + ((stack1 = (helpers.castBodyIfNeeded || (depth0 && depth0.castBodyIfNeeded) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"java","body",(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"castBodyIfNeeded","hash":{},"data":data})) != null ? stack1 : "")
    + ", handler);";
},"82":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.form : depth0),{"name":"if","hash":{},"fn":container.program(83, data, 0, blockParams, depths),"inverse":container.program(85, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"83":function(container,depth0,helpers,partials,data) {
    return "request.sendForm(form, handler);";
},"85":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.stream : depth0),{"name":"if","hash":{},"fn":container.program(86, data, 0, blockParams, depths),"inverse":container.program(88, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"86":function(container,depth0,helpers,partials,data) {
    return "request.sendStream(stream, handler);";
},"88":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.buffer : depth0),{"name":"if","hash":{},"fn":container.program(89, data, 0, blockParams, depths),"inverse":container.program(77, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"89":function(container,depth0,helpers,partials,data) {
    return "request.sendBuffer(buffer, handler);";
},"91":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "// Security requirements functions\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.openapiSpec : depth0)) != null ? stack1.components : stack1)) != null ? stack1.securitySchemes : stack1),{"name":"each","hash":{},"fn":container.program(92, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"92":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    private void attach"
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(data && data.key),{"name":"sanitize","hash":{},"data":data}),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "")
    + "Security (HttpRequest request, MultiMap cookies) {\n"
    + ((stack1 = (helpers.and || (depth0 && depth0.and) || alias2).call(alias1,(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"http",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.scheme : depth0),"basic",{"name":"eq","hash":{},"data":data}),{"name":"and","hash":{},"fn":container.program(93, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.or || (depth0 && depth0.or) || alias2).call(alias1,(helpers.and || (depth0 && depth0.and) || alias2).call(alias1,(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"http",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.scheme : depth0),"bearer",{"name":"eq","hash":{},"data":data}),{"name":"and","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"oauth2",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"openIdConnect",{"name":"eq","hash":{},"data":data}),{"name":"or","hash":{},"fn":container.program(95, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"apiKey",{"name":"eq","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(97, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    }\n\n";
},"93":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        this.addHeaderParam(\"Authorization\", \"Basic \" + Base64.getEncoder()\n            .encode((this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_username + \":\" + this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_password).getBytes()), request);\n";
},"95":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        this.addHeaderParam(\"Authorization\", \"Bearer \" + "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_token, request);\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(helpers.eq || (depth0 && depth0.eq) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0["in"] : depth0),"header",{"name":"eq","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(98, data, 0),"inverse":container.program(100, data, 0),"data":data})) != null ? stack1 : "");
},"98":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        this.addHeaderParam(\""
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_token, request);\n";
},"100":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(helpers.eq || (depth0 && depth0.eq) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0["in"] : depth0),"cookie",{"name":"eq","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(101, data, 0),"inverse":container.program(103, data, 0),"data":data})) != null ? stack1 : "");
},"101":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        this.renderCookieParam(\""
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_token, cookies);\n";
},"103":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(helpers.eq || (depth0 && depth0.eq) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0["in"] : depth0),"query",{"name":"eq","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"104":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        this.addQueryParam(\""
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_token, request);";
},"106":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    // Security parsedParameters functions\n    "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.openapiSpec : depth0)) != null ? stack1.components : stack1)) != null ? stack1.securitySchemes : stack1),{"name":"each","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"107":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.and || (depth0 && depth0.and) || alias2).call(alias1,(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"http",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.scheme : depth0),"basic",{"name":"eq","hash":{},"data":data}),{"name":"and","hash":{},"fn":container.program(108, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.or || (depth0 && depth0.or) || alias2).call(alias1,(helpers.and || (depth0 && depth0.and) || alias2).call(alias1,(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"http",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.scheme : depth0),"bearer",{"name":"eq","hash":{},"data":data}),{"name":"and","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"apiKey",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"oauth2",{"name":"eq","hash":{},"data":data}),(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"openIdConnect",{"name":"eq","hash":{},"data":data}),{"name":"or","hash":{},"fn":container.program(110, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"108":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "\n    /**\n     * Set username and password for basic http security scheme "
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n     */\n    public void set"
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(data && data.key),{"name":"sanitize","hash":{},"data":data}),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "")
    + "Params(String username, String password) {\n        this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_username = username;\n        this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_password = password;\n    }\n    ";
},"110":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "\n    /**\n     * Set access token for security scheme "
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n     */\n    public void set"
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(helpers.sanitize || (depth0 && depth0.sanitize) || alias2).call(alias1,(data && data.key),{"name":"sanitize","hash":{},"data":data}),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "")
    + "Token(String token) {\n        this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "_token = token;\n    }\n    ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ";\n\nimport io.vertx.core.AsyncResult;\nimport io.vertx.core.Handler;\nimport io.vertx.core.MultiMap;\nimport io.vertx.core.Vertx;\nimport io.vertx.core.buffer.Buffer;\nimport io.vertx.core.json.JsonObject;\nimport io.vertx.core.json.JsonArray;\nimport io.vertx.core.streams.ReadStream;\nimport io.vertx.ext.web.client.HttpRequest;\nimport io.vertx.ext.web.client.HttpResponse;\nimport io.vertx.ext.web.client.WebClient;\nimport io.vertx.ext.web.client.WebClientOptions;\n\nimport java.io.UnsupportedEncodingException;\nimport java.net.URL;\nimport java.net.URLEncoder;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\nimport java.util.Base64;\n\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".models.*;\n\npublic class ApiClient {\n    private WebClient client;\n    private int port;\n    private String host;\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.openapiSpec : depth0)) != null ? stack1.components : stack1)) != null ? stack1.securitySchemes : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    private MultiMap cookieParams;\n\n    ApiClient(Vertx vertx, String host, int port) {\n        client = WebClient.create(vertx, new WebClientOptions().setDefaultHost(host).setDefaultPort(port));\n        this.port = port;\n        this.host = host;\n\n        cookieParams = MultiMap.caseInsensitiveMultiMap();\n    }\n\n    ApiClient(WebClient client) {\n        this.client = client;\n\n        cookieParams = MultiMap.caseInsensitiveMultiMap();\n    }\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.operations : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.openapiSpec : depth0)) != null ? stack1.components : stack1)) != null ? stack1.securitySchemes : stack1),{"name":"if","hash":{},"fn":container.program(91, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.openapiSpec : depth0)) != null ? stack1.components : stack1)) != null ? stack1.securitySchemes : stack1),{"name":"if","hash":{},"fn":container.program(106, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n    // Parameters functions\n\n    /**\n     * Remove a cookie parameter from the cookie cache\n     *\n     * @param paramName name of cookie parameter\n     */\n    public void removeCookie(String paramName) {\n        cookieParams.remove(paramName);\n    }\n\n    private void addQueryParam(String paramName, Object value, HttpRequest request) {\n        request.addQueryParam(paramName, String.valueOf(value));\n    }\n\n    /**\n     * Add a cookie param in cookie cache\n     *\n     * @param paramName name of cookie parameter\n     * @param value value of cookie parameter\n     */\n    public void addCookieParam(String paramName, Object value) {\n        renderCookieParam(paramName, value, cookieParams);\n    }\n\n    private void addHeaderParam(String headerName, Object value, HttpRequest request) {\n        request.putHeader(headerName, String.valueOf(value));\n    }\n\n    private String renderPathParam(String paramName, Object value) {\n        return String.valueOf(value);\n    }\n\n    private void renderCookieParam(String paramName, Object value, MultiMap map) {\n        map.remove(paramName);\n        map.add(paramName, String.valueOf(value));\n    }\n\n    /**\n     * Following this table to implement parsedParameters serialization\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | style          | explode | in            | array                               | object                                 |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | matrix         | false   | path          | ;color=blue,black,brown             | ;color=R,100,G,200,B,150               |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | matrix         | true    | path          | ;color=blue;color=black;color=brown | ;R=100;G=200;B=150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | label          | false   | path          | .blue.black.brown                   | .R.100.G.200.B.150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | label          | true    | path          | .blue.black.brown                   | .R=100.G=200.B=150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | false   | query, cookie | color=blue,black,brown              | color=R,100,G,200,B,150                |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | true    | query, cookie | color=blue&color=black&color=brown  | R=100&G=200&B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | false   | path, header  | blue,black,brown                    | R,100,G,200,B,150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | true    | path, header  | blue,black,brown                    | R=100,G=200,B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | spaceDelimited | false   | query         | blue%20black%20brown                | R%20100%20G%20200%20B%20150            |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | pipeDelimited  | false   | query         | blue|black|brown                    | R|100|G|200                            |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | deepObject     | true    | query         | n/a                                 | color[R]=100&color[G]=200&color[B]=150 |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     */\n\n    /**\n     * Render path value with matrix style exploded/not exploded\n     *\n     * @param paramName\n     * @param value\n     * @return\n     */\n    private String renderPathMatrix(String paramName, Object value) {\n        return \";\" + paramName + \"=\" + String.valueOf(value);\n    }\n\n    /**\n     * Render path array with matrix style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | matrix         | false   | path          | ;color=blue,black,brown             | ;color=R,100,G,200,B,150               |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathArrayMatrix(String paramName, List<Object> values) {\n        String serialized = String.join(\",\", values.stream().map(object -> encode(String.valueOf(object))).collect(Collectors.toList()));\n        return \";\" + paramName + \"=\" + serialized;\n    }\n\n    /**\n     * Render path object with matrix style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | matrix         | false   | path          | ;color=blue,black,brown             | ;color=R,100,G,200,B,150               |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathObjectMatrix(String paramName, Map<String, Object> values) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey());\n            listToSerialize.add(encode(String.valueOf(entry.getValue())));\n        }\n        String serialized = String.join(\",\", listToSerialize);\n        return \";\" + paramName + \"=\" + serialized;\n    }\n\n    /**\n     * Render path array with matrix style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | matrix         | true    | path          | ;color=blue;color=black;color=brown | ;R=100;G=200;B=150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathArrayMatrixExplode(String paramName, List<Object> values) {\n        return String.join(\"\", values.stream().map(object -> \";\" + paramName + \"=\" + encode(String.valueOf(object))).collect(Collectors.toList()));\n    }\n\n    /**\n     * Render path object with matrix style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | matrix         | true    | path          | ;color=blue;color=black;color=brown | ;R=100;G=200;B=150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathObjectMatrixExplode(String paramName, Map<String, Object> values) {\n      return String.join(\"\", values.entrySet().stream().map(\n        entry -> \";\" + entry.getKey() + \"=\" + encode(String.valueOf(entry.getValue()))\n      ).collect(Collectors.toList()));\n    }\n\n    /**\n     * Render path value with label style exploded/not exploded\n     *\n     * @param paramName\n     * @param value\n     * @return\n     */\n    private String renderPathLabel(String paramName, Object value) {\n        return \".\" + String.valueOf(value);\n    }\n\n    /**\n     * Render path array with label style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | label          | false   | path          | .blue.black.brown                   | .R.100.G.200.B.150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathArrayLabel(String paramName, List<Object> values) {\n        return \".\" + String.join(\".\", values.stream().map(object -> encode(String.valueOf(object))).collect(Collectors.toList()));\n    }\n\n    /**\n     * Render path object with label style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | label          | false   | path          | .blue.black.brown                   | .R.100.G.200.B.150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathObjectLabel(String paramName, Map<String, Object> values) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey());\n            listToSerialize.add(encode(String.valueOf(entry.getValue())));\n        }\n        return \".\" + String.join(\".\", listToSerialize);\n    }\n\n    /**\n     * Render path array with label style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | label          | true    | path          | .blue.black.brown                   | .R=100.G=200.B=150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathArrayLabelExplode(String paramName, List<Object> values) {\n        return renderPathArrayLabel(paramName, values);\n    }\n\n    /**\n     * Render path object with label style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | label          | true    | path          | .blue.black.brown                   | .R=100.G=200.B=150                     |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathObjectLabelExplode(String paramName, Map<String, Object> values) {\n        String result = \"\";\n        for (Map.Entry<String, Object> value : values.entrySet())\n            result = result.concat(\".\" + value.getKey() + \"=\" + encode(String.valueOf(value.getValue())));\n        return result;\n    }\n\n    /**\n     * Render path array with simple style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | false   | path, header  | blue,black,brown                    | R,100,G,200,B,150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathArraySimple(String paramName, List<Object> values) {\n        return String.join(\",\", values.stream().map(object -> encode(String.valueOf(object))).collect(Collectors.toList()));\n    }\n\n    /**\n     * Render path object with simple style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | false   | path, header  | blue,black,brown                    | R,100,G,200,B,150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathObjectSimple(String paramName, Map<String, Object> values) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey());\n            listToSerialize.add(encode(String.valueOf(entry.getValue())));\n        }\n        return String.join(\",\", listToSerialize);\n    }\n\n    /**\n     * Render path array with simple style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | true    | path, header  | blue,black,brown                    | R=100,G=200,B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathArraySimpleExplode(String paramName, List<Object> values) {\n        return renderPathArraySimple(paramName, values);\n    }\n\n    /**\n     * Render path object with simple style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | true    | path, header  | blue,black,brown                    | R=100,G=200,B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @return\n     */\n    private String renderPathObjectSimpleExplode(String paramName, Map<String, Object> values) {\n        return String.join(\",\",\n          values.entrySet().stream().map((entry) -> entry.getKey() + \"=\" + encode(String.valueOf(entry.getValue()))).collect(Collectors.toList()));\n    }\n\n    /**\n     * Add query array with form style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | false   | query, cookie | color=blue,black,brown              | color=R,100,G,200,B,150                |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryArrayForm(String paramName, List<Object> values, HttpRequest request) {\n        String serialized = String.join(\",\", values.stream().map(object -> String.valueOf(object)).collect(Collectors.toList()));\n        this.addQueryParam(paramName, serialized, request); // Encoding is done by WebClient\n    }\n\n    /**\n     * Add query object with form style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | false   | query, cookie | color=blue,black,brown              | color=R,100,G,200,B,150                |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryObjectForm(String paramName, Map<String, Object> values, HttpRequest request) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey());\n            listToSerialize.add(String.valueOf(entry.getValue()));\n        }\n        String serialized = String.join(\",\", listToSerialize);\n        this.addQueryParam(paramName, serialized, request); // Encoding is done by WebClient\n    }\n\n    /**\n     * Add cookie array with form style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | false   | query, cookie | color=blue,black,brown              | color=R,100,G,200,B,150                |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     */\n    private void renderCookieArrayForm(String paramName, List<Object> values, MultiMap map) {\n        String value = String.join(\",\", values.stream().map(object -> String.valueOf(object)).collect(Collectors.toList()));\n        map.remove(paramName);\n        map.add(paramName, value);\n    }\n\n    /**\n     * Add a cookie array parameter in cookie cache\n     *\n     * @param paramName name of cookie parameter\n     * @param values list of values of cookie parameter\n     */\n    public void addCookieArrayForm(String paramName, List<Object> values) {\n        renderCookieArrayForm(paramName, values, cookieParams);\n    }\n\n    /**\n     * Add cookie object with form style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | false   | query, cookie | color=blue,black,brown              | color=R,100,G,200,B,150                |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     */\n    private void renderCookieObjectForm(String paramName, Map<String, Object> values, MultiMap map) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey());\n            listToSerialize.add(String.valueOf(entry.getValue()));\n        }\n        String value = String.join(\",\", listToSerialize);\n        map.remove(paramName);\n        map.add(paramName, value);\n    }\n\n    /**\n     * Add a cookie object parameter in cookie cache\n     *\n     * @param paramName name of cookie parameter\n     * @param values map of values of cookie parameter\n     */\n    public void addCookieObjectForm(String paramName, Map<String, Object> values) {\n        renderCookieObjectForm(paramName, values, cookieParams);\n    }\n\n    /**\n     * Add query array with form style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | true    | query, cookie | color=blue&color=black&color=brown  | R=100&G=200&B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryArrayFormExplode(String paramName, List<Object> values, HttpRequest request) {\n        for (Object value : values)\n            this.addQueryParam(paramName, String.valueOf(value), request);\n    }\n\n    /**\n     * Add query object with form style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | true    | query, cookie | color=blue&color=black&color=brown  | R=100&G=200&B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryObjectFormExplode(String paramName, Map<String, Object> values, HttpRequest request) {\n        for (Map.Entry<String, Object> value : values.entrySet())\n            this.addQueryParam(value.getKey(), String.valueOf(value.getValue()), request);\n    }\n\n    /**\n     * Add cookie array with form style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | true    | query, cookie | color=blue&color=black&color=brown  | R=100&G=200&B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     */\n    private void renderCookieArrayFormExplode(String paramName, List<Object> values, MultiMap map) {\n        map.remove(paramName);\n        for (Object value : values)\n            map.add(paramName, String.valueOf(value));\n    }\n\n    public void addCookieArrayFormExplode(String paramName, List<Object> values) {\n        renderCookieArrayFormExplode(paramName, values, cookieParams);\n    }\n\n    /**\n     * Add cookie object with form style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | form           | true    | query, cookie | color=blue&color=black&color=brown  | R=100&G=200&B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     */\n    private void renderCookieObjectFormExplode(String paramName, Map<String, Object> values, MultiMap map) {\n        for (Map.Entry<String, Object> value : values.entrySet()) {\n            map.remove(value.getKey());\n            map.add(value.getKey(), String.valueOf(value.getValue()));\n        }\n    }\n\n    public void addCookieObjectFormExplode(String paramName, Map<String, Object> values) {\n        renderCookieObjectFormExplode(paramName, values, cookieParams);\n    }\n\n    /**\n     * Add header array with simple style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | false   | path, header  | blue,black,brown                    | R,100,G,200,B,150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param headerName\n     * @param values\n     * @param request\n     */\n    private void addHeaderArraySimple(String headerName, List<Object> values, HttpRequest request) {\n        String serialized = String.join(\",\", values.stream().map(object -> String.valueOf(object)).collect(Collectors.toList()));\n        this.addHeaderParam(headerName, serialized, request);\n    }\n\n    /**\n     * Add header object with simple style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | false   | path, header  | blue,black,brown                    | R,100,G,200,B,150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param headerName\n     * @param values\n     * @param request\n     */\n    private void addHeaderObjectSimple(String headerName, Map<String, Object> values, HttpRequest request) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey());\n            listToSerialize.add(String.valueOf(entry.getValue()));\n        }\n        String serialized = String.join(\",\", listToSerialize);\n        this.addHeaderParam(headerName, serialized, request);\n    }\n\n    /**\n     * Add header array with simple style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | true    | path, header  | blue,black,brown                    | R=100,G=200,B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param headerName\n     * @param values\n     * @param request\n     */\n    private void addHeaderArraySimpleExplode(String headerName, List<Object> values, HttpRequest request) {\n        this.addHeaderArraySimple(headerName, values, request);\n    }\n\n    /**\n     * Add header object with simple style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | simple         | true    | path, header  | blue,black,brown                    | R=100,G=200,B=150                      |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param headerName\n     * @param values\n     * @param request\n     */\n    private void addHeaderObjectSimpleExplode(String headerName, Map<String, Object> values, HttpRequest request) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey() + \"=\" + String.valueOf(entry.getValue()));\n        }\n        String serialized = String.join(\",\", listToSerialize);\n        this.addHeaderParam(headerName, serialized, request);\n    }\n\n    /**\n     * Add query array with spaceDelimited style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | spaceDelimited | false   | query         | blue%20black%20brown                | R%20100%20G%20200%20B%20150            |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryArraySpaceDelimited(String paramName, List<Object> values, HttpRequest request) {\n        String serialized = String.join(\" \", values.stream().map(object -> String.valueOf(object)).collect(Collectors.toList()));\n        this.addQueryParam(paramName, serialized, request); // Encoding is done by WebClient\n    }\n\n    /**\n     * Add query object with spaceDelimited style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | spaceDelimited | false   | query         | blue%20black%20brown                | R%20100%20G%20200%20B%20150            |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryObjectSpaceDelimited(String paramName, Map<String, Object> values, HttpRequest request) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey());\n            listToSerialize.add(String.valueOf(entry.getValue()));\n        }\n        String serialized = String.join(\" \", listToSerialize);\n        this.addQueryParam(paramName, serialized, request); // Encoding is done by WebClient\n    }\n\n    /**\n     * Add query array with pipeDelimited style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | pipeDelimited  | false   | query         | blue|black|brown                    | R|100|G|200                            |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryArrayPipeDelimited(String paramName, List<Object> values, HttpRequest request) {\n        String serialized = String.join(\"|\", values.stream().map(object -> String.valueOf(object)).collect(Collectors.toList()));\n        this.addQueryParam(paramName, serialized, request); // Encoding is done by WebClient\n    }\n\n    /**\n     * Add query object with pipeDelimited style and not exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | pipeDelimited  | false   | query         | blue|black|brown                    | R|100|G|200                            |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryObjectPipeDelimited(String paramName, Map<String, Object> values, HttpRequest request) {\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            listToSerialize.add(entry.getKey());\n            listToSerialize.add(String.valueOf(entry.getValue()));\n        }\n        String serialized = String.join(\"|\", listToSerialize);\n        this.addQueryParam(paramName, serialized, request); // Encoding is done by WebClient\n    }\n\n    /**\n     * Add query object with deepObject style and exploded\n     *\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     | deepObject     | true    | query         | n/a                                 | color[R]=100&color[G]=200&color[B]=150 |\n     +----------------+---------+---------------+-------------------------------------+----------------------------------------+\n     *\n     * @param paramName\n     * @param values\n     * @param request\n     */\n    private void addQueryObjectDeepObjectExplode(String paramName, Map<String, Object> values, HttpRequest request) {\n        for (Map.Entry<String, Object> entry : values.entrySet()) {\n            this.addQueryParam(paramName + \"[\" + entry.getKey() + \"]\", String.valueOf(entry.getValue()), request);\n        }\n    }\n\n\n    private void renderAndAttachCookieHeader(HttpRequest request, MultiMap otherCookies) {\n        if ((otherCookies == null || otherCookies.isEmpty()) && cookieParams.isEmpty())\n            return;\n        List<String> listToSerialize = new ArrayList<>();\n        for (Map.Entry<String, String> e : cookieParams.entries()) {\n            if (otherCookies!= null && !otherCookies.contains(e.getKey())) {\n                try {\n                    listToSerialize.add(URLEncoder.encode(e.getKey(), \"UTF-8\") + \"=\" + URLEncoder.encode(e.getValue(), \"UTF-8\"));\n                } catch (UnsupportedEncodingException e1) {\n                }\n            }\n        }\n        if (otherCookies != null) {\n            for (Map.Entry<String, String> e : otherCookies.entries()) {\n                try {\n                    listToSerialize.add(URLEncoder.encode(e.getKey(), \"UTF-8\") + \"=\" + URLEncoder.encode(e.getValue(), \"UTF-8\"));\n                } catch (UnsupportedEncodingException e1) {\n                }\n            }\n        }\n        request.putHeader(\"Cookie\", String.join(\"; \", listToSerialize));\n    }\n\n    // Other functions\n\n    private String encode(String s) {\n        try {\n            return URLEncoder.encode(s, \"UTF-8\");\n        } catch (Exception e) {\n            return null;\n        }\n    }\n\n    /**\n     * Close the connection with server\n     *\n     */\n    public void close() {\n        client.close();\n    }\n\n}\n";
},"useData":true,"useDepths":true})
exports['openapi-server/src/main/java/{packageDir}/MainVerticle.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "import "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.metadata)) && stack1["package"]), depth0)) != null ? stack1 : "")
    + ".security.*;\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        routerFactory.addHandlerByOperationId(\""
    + ((stack1 = ((helper = (helper = helpers.operationId || (depth0 != null ? depth0.operationId : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"operationId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", new "
    + ((stack1 = (helpers.toClassName || (depth0 && depth0.toClassName) || alias2).call(alias1,(depth0 != null ? depth0.operationId : depth0),{"name":"toClassName","hash":{},"data":data})) != null ? stack1 : "")
    + "Handler());\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        // Add security handlers\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.metadata)) && stack1.openapi)) && stack1.original)) && stack1.components)) && stack1.securitySchemes),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        routerFactory.addSecurityHandler(\""
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", new "
    + ((stack1 = (helpers.toClassName || (depth0 && depth0.toClassName) || alias2).call(alias1,(data && data.key),{"name":"toClassName","hash":{},"data":data})) != null ? stack1 : "")
    + "Handler());\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing;

  return "package "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ";\n\nimport io.vertx.core.AbstractVerticle;\nimport io.vertx.core.http.HttpServer;\nimport io.vertx.core.http.HttpServerOptions;\nimport io.vertx.ext.web.api.contract.openapi3.OpenAPI3RouterFactory;\nimport io.vertx.ext.web.Router;\nimport io.vertx.core.Future;\n\nimport "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".handlers.*;\nimport "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".models.*;\n"
    + ((stack1 = (helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.openapi : stack1)) != null ? stack1.original : stack1)) != null ? stack1.components : stack1)) != null ? stack1.securitySchemes : stack1),{"name":"nonEmpty","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\npublic class MainVerticle extends AbstractVerticle {\n\n  HttpServer server;\n\n  @Override\n  public void start(Future future) {\n    OpenAPI3RouterFactory.create(this.vertx, getClass().getResource(\"/openapi.json\").getFile(), openAPI3RouterFactoryAsyncResult -> {\n      if (openAPI3RouterFactoryAsyncResult.succeeded()) {\n        OpenAPI3RouterFactory routerFactory = openAPI3RouterFactoryAsyncResult.result();\n\n        // Enable automatic response when ValidationException is thrown\n        routerFactory.setOptions(new RouterFactoryOptions().setMountValidationFailureHandler(true));\n\n        // Add routes handlers\n"
    + ((stack1 = helpers.each.call(alias2,((stack1 = ((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.openapi : stack1)) != null ? stack1.operations : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.openapi : stack1)) != null ? stack1.original : stack1)) != null ? stack1.components : stack1)) != null ? stack1.securitySchemes : stack1),{"name":"nonEmpty","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n        // Generate the router\n        Router router = routerFactory.getRouter();\n        server = vertx.createHttpServer(new HttpServerOptions().setPort(8080).setHost(\"localhost\"));\n        server.requestHandler(router).listen();\n        future.complete();\n      } else {\n          // Something went wrong during router factory initialization\n          Throwable exception = openAPI3RouterFactoryAsyncResult.cause();\n      }\n    });\n  }\n\n  @Override\n  public void stop(){\n    this.server.close();\n  }\n\n}\n";
},"useData":true})
exports['openapi-server/src/test/java/{packageDir}/BaseTest.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "package "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ";\n\nimport io.vertx.core.DeploymentOptions;\nimport io.vertx.core.Vertx;\nimport io.vertx.core.VertxOptions;\nimport io.vertx.ext.unit.Async;\nimport io.vertx.ext.unit.TestContext;\nimport io.vertx.ext.unit.junit.RunTestOnContext;\n\npublic class BaseTest {\n\n    Vertx vertx;\n    String deploymentId;\n    ApiClient apiClient;\n\n    public void before(TestContext context) {\n        vertx = Vertx.vertx(new VertxOptions().setMaxEventLoopExecuteTime(Long.MAX_VALUE));\n        Async async = context.async();\n        vertx.deployVerticle(MainVerticle.class.getName(), res -> {\n            if (res.succeeded()) {\n                deploymentId = res.result();\n                apiClient = new ApiClient(vertx, \"localhost\", 8080);\n                async.complete();\n            } else {\n                context.fail(\"Verticle deployment failed!\");\n                async.complete();\n            }\n        });\n    }\n\n    public void after(TestContext context) {\n        apiClient.close();\n        vertx.close(context.asyncAssertSuccess());\n    }\n}\n";
},"useData":true})
exports['openapi-server/src/test/java/{packageDir}/{operationId}Test.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    @Test\n    public void test"
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(data && data.key),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "")
    + "(TestContext test) {\n        Async async = test.async("
    + ((stack1 = (helpers.size || (depth0 && depth0.size) || alias2).call(alias1,((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.functions),{"name":"size","hash":{},"data":data})) != null ? stack1 : "")
    + ");\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.path),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.cookie),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.query),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.header),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.functions),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    }\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        "
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,"java",(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ";\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "\n        // TODO set parameters for "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " request\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.path),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.cookie),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.query),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.header),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.json : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "        apiClient."
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "("
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.path),{"name":"each","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.cookie),{"name":"each","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.query),{"name":"each","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.operation)) && stack1.parsedParameters)) && stack1.header),{"name":"each","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.json : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.program(22, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "(AsyncResult<HttpResponse> ar) -> {\n            if (ar.succeeded()) {\n                "
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].statusCode : depths[1]),{"name":"if","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                //TODO add your asserts\n            } else {\n                test.fail(\"Request failed\");\n            }\n            async.countDown();\n        });\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " = null;\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        "
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"java",(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " body = null;\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.form : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return "        MultiMap form = MultiMap.caseInsensitiveMultiMap();\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.stream : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "        ReadStream<Buffer> stream = null;\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.buffer : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "        Buffer buffer = null;\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ", ";
},"20":function(container,depth0,helpers,partials,data) {
    return "body, ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.form : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    return "form, ";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.stream : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    return "stream, ";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.buffer : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return "buffer, ";
},"31":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "test.assertEquals("
    + ((stack1 = container.lambda((depths[1] != null ? depths[1].statusCode : depths[1]), depth0)) != null ? stack1 : "")
    + ", ar.result().statusCode());";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.lambda;

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ";\n\nimport io.vertx.ext.web.client.HttpResponse;\nimport io.vertx.core.AsyncResult;\nimport io.vertx.ext.unit.Async;\nimport io.vertx.ext.unit.TestContext;\nimport io.vertx.ext.unit.junit.VertxUnitRunner;\nimport io.vertx.core.json.JsonObject;\nimport io.vertx.core.MultiMap;\nimport org.junit.*;\nimport org.junit.runner.RunWith;\nimport java.util.List;\nimport java.util.Map;\n\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".models.*;\n\n/**\n * "
    + ((stack1 = alias4(((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.operationId : stack1), depth0)) != null ? stack1 : "")
    + " Test\n */\n@RunWith(VertxUnitRunner.class)\npublic class "
    + ((stack1 = alias4(((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.className : stack1), depth0)) != null ? stack1 : "")
    + "Test extends BaseTest {\n\n    @Override\n    @Before\n    public void before(TestContext context) {\n        super.before(context);\n        //TODO add some test initialization code like security token retrieval\n    }\n\n    @Override\n    @After\n    public void after(TestContext context) {\n        //TODO add some test end code like session destroy\n        super.after(context);\n    }\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.responses : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n}";
},"useData":true,"useDepths":true})
exports['openapi-server-sp/src/main/java/{packageDir}/MainVerticle.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "import "
    + ((stack1 = container.lambda(((stack1 = (data && data.root)) && stack1["package"]), depth0)) != null ? stack1 : "")
    + ".security.*;\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "    "
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + " = "
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".create(vertx);\n    registeredConsumers.add(\n      serviceBinder\n        .setAddress(\""
    + ((stack1 = ((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\")\n        .register("
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".class, "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + ")\n    );\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        routerFactory.addHandlerByOperationId(\""
    + ((stack1 = ((helper = (helper = helpers.operationId || (depth0 != null ? depth0.operationId : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"operationId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", new "
    + ((stack1 = (helpers.toClassName || (depth0 && depth0.toClassName) || alias2).call(alias1,(depth0 != null ? depth0.operationId : depth0),{"name":"toClassName","hash":{},"data":data})) != null ? stack1 : "")
    + "Handler());\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        // Add security handlers\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.securitySchemes),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "        routerFactory.addSecurityHandler(\""
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\", new "
    + ((stack1 = (helpers.toClassName || (depth0 && depth0.toClassName) || alias2).call(alias1,(data && data.key),{"name":"toClassName","hash":{},"data":data})) != null ? stack1 : "")
    + "Handler());\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ";\n\nimport io.vertx.core.AbstractVerticle;\nimport io.vertx.core.eventbus.MessageConsumer;\nimport io.vertx.core.http.HttpServer;\nimport io.vertx.core.http.HttpServerOptions;\nimport io.vertx.core.json.JsonObject;\nimport io.vertx.ext.web.api.contract.openapi3.OpenAPI3RouterFactory;\nimport io.vertx.ext.web.Router;\nimport io.vertx.core.Future;\nimport io.vertx.serviceproxy.ServiceBinder;\n\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".services.*;\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".handlers.*;\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".models.*;\n"
    + ((stack1 = (helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,(depth0 != null ? depth0.securitySchemes : depth0),{"name":"nonEmpty","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nimport java.util.List;\n\npublic class MainVerticle extends AbstractVerticle {\n\n  HttpServer server;\n  ServiceBinder serviceBinder;\n\n  List<MessageConsumer<JsonObject>> registeredConsumers;\n\n  /**\n   * This method starts all services\n   */\n  private void startServices() {\n    this.serviceBinder = new ServiceBinder(vertx);\n    this.registeredConsumers = new ArrayList<>();\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.services : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  }\n\n  /**\n   * This method constructs the router factory, mounts services and handlers and starts the http server with built router\n   * @return\n   */\n  private Future<Void> startHttpServer() {\n    Future<Void> future = Future.future();\n    OpenAPI3RouterFactory.create(this.vertx, getClass().getResource(\"/openapi.yaml\").getFile(), openAPI3RouterFactoryAsyncResult -> {\n      if (openAPI3RouterFactoryAsyncResult.succeeded()) {\n        OpenAPI3RouterFactory routerFactory = openAPI3RouterFactoryAsyncResult.result();\n\n        // Enable automatic response when ValidationException is thrown\n        routerFactory.setOptions(new RouterFactoryOptions().setMountValidationFailureHandler(true));\n\n        // Mount services on event bus based on extensions\n        routerFactory.mountServicesFromExtensions();\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.operations : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,(depth0 != null ? depth0.securitySchemes : depth0),{"name":"nonEmpty","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n\n        // Generate the router\n        Router router = routerFactory.getRouter();\n        server = vertx.createHttpServer(new HttpServerOptions().setPort(8080).setHost(\"localhost\"));\n        server.requestHandler(router).listen();\n        future.complete();\n      } else {\n        // Something went wrong during router factory initialization\n        future.fail(openAPI3RouterFactoryAsyncResult.cause());\n      }\n    });\n    return future;\n  }\n\n  @Override\n  public void start(Future<Void> future) {\n    startServices();\n    startHttpServer().setHandler(future.completer());\n  }\n\n  /**\n   * This method closes the http server and unregister all services loaded to Event Bus\n   */\n  @Override\n  public void stop(){\n    this.server.close();\n    registeredConsumers.forEach(c -> serviceBinder.unregister(c));\n  }\n\n}\n";
},"useData":true})
exports['package-info/src/main/java/{packageDir}/package-info.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "@ModuleGen(name=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "\", groupPackage = \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + "\")\npackage "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ";\n\nimport io.vertx.codegen.annotations.ModuleGen;\n";
},"useData":true})
exports['service-proxy/src/main/java/{packageDir}/MainVerticle.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "package "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ";\n\nimport "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".impl."
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + "Impl;\n\nimport io.vertx.core.AbstractVerticle;\nimport io.vertx.serviceproxy.ServiceBinder;\n\npublic class MainVerticle extends AbstractVerticle {\n\n  private "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + "Impl service;\n\n  @Override\n  public void start() throws Exception {\n    service = new "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + "Impl(vertx, config());\n    new ServiceBinder(vertx)\n      .setAddress("
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + ".DEFAULT_ADDRESS)\n      .register("
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + ".class, service);\n  }\n\n  @Override\n  public void stop() throws Exception {\n    service.close();\n  }\n}\n";
},"useData":true})
exports['service-proxy/src/main/java/{packageDir}/{Service}.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "package "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ";\n\nimport io.vertx.codegen.annotations.ProxyGen;\nimport io.vertx.codegen.annotations.VertxGen;\nimport io.vertx.core.Vertx;\nimport io.vertx.serviceproxy.ServiceProxyBuilder;\n\n/**\n * "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + " API.\n */\n@VertxGen\n@ProxyGen\npublic interface "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + " {\n\n  /**\n   * The default service address.\n   */\n  String DEFAULT_ADDRESS = \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".service\";\n\n  /**\n    * Method called to create a proxy (to consume the service).\n    *\n    * @param vertx   vert.x\n    * @param address the address on the event bus where the service is served.\n    * @return the proxy\n    */\n  static "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + " createProxy(Vertx vertx, String address) {\n    return new ServiceProxyBuilder(vertx)\n      .setAddress(address)\n      .build("
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + ".class);\n  }\n}\n";
},"useData":true})
exports['sbt/src/main/scala/{packageDir}/MainVerticle.scala'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "package "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + "\n\nimport io.vertx.lang.scala.ScalaVerticle\n\nclass MainVerticle extends ScalaVerticle {\n\n  override def start(): Unit = {\n    // your code goes here...\n    vertx\n      .createHttpServer()\n      .requestHandler(_.response()\n        .putHeader(\"content-type\", \"text/plain\")\n        .end(\"Hello from Vert.x!\"))\n      .listenFuture(8080, \"0.0.0.0\")\n        .map(_ => ())\n  }\n}\n";
},"useData":true})
exports['verticle/src/main/java/{packageDir}/MainVerticle.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "import io.vertx.core.Vertx;\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "import io.vertx.core.json.*;\n\nimport java.time.Instant;\nimport java.util.*;\n\nimport io.vertx.ext.web.Router;\nimport io.vertx.ext.web.handler.StaticHandler;\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nimport static java.time.temporal.ChronoUnit.DAYS;\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "import io.vertx.ext.web.templ.HandlebarsTemplateEngine;\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "import xyz.jetdrone.vertx.hot.reload.HotReload;\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "  public static void main(String[] args) {\n    // TODO: configure your vertx options here\n    Vertx.vertx().deployVerticle(new MainVerticle());\n  }\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    final Router router = Router.router(vertx);\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    router.get(\"/\").handler(ctx -> {\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "    });\n\n    // the example weather API\n    List<String> SUMMARIES = Arrays.asList(\"Freezing\", \"Bracing\", \"Chilly\", \"Cool\", \"Mild\", \"Warm\", \"Balmy\", \"Hot\", \"Sweltering\", \"Scorching\");\n\n    router.get(\"/api/weather-forecasts\").handler(ctx -> {\n      final JsonArray response = new JsonArray();\n      final Instant now = Instant.now();\n      final Random rnd = new Random();\n\n      for (int i = 1; i <= 5; i++) {\n        JsonObject forecast = new JsonObject()\n          .put(\"dateFormatted\", now.plus(i, DAYS))\n          .put(\"temperatureC\", -20 + rnd.nextInt(35))\n          .put(\"summary\", SUMMARIES.get(rnd.nextInt(SUMMARIES.size())));\n\n        forecast.put(\"temperatureF\", 32 + (int) (forecast.getInteger(\"temperatureC\") / 0.5556));\n\n        response.add(forecast);\n      }\n\n      ctx.response()\n        .putHeader(\"Content-Type\", \"application/json\")\n        .end(response.encode());\n    });\n\n    // Serve the static resources\n    router.route().handler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + ");\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    final HandlebarsTemplateEngine engine = HandlebarsTemplateEngine.create();\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "    // development hot reload\n    router.get().handler(HotReload.create());\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "      // we define a hardcoded title for our application\n      ctx.put(\"title\", \"Home Page\");\n      ctx.put(\"hotreload\", System.getenv(\"VERTX_HOT_RELOAD\"));\n\n      engine.render(ctx, \"templates\", \"/index.hbs\", res -> {\n        if (res.succeeded()) {\n          ctx.response().end(res.result());\n        } else {\n          ctx.fail(res.cause());\n        }\n      });\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "      ctx.response()\n        .putHeader(\"content-type\", \"text/plain\")\n        .end(\"Hello from Vert.x!\");\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "HotReload.createStaticHandler()";
},"21":function(container,depth0,helpers,partials,data) {
    return "StaticHandler.create()";
},"23":function(container,depth0,helpers,partials,data) {
    return "router::accept";
},"25":function(container,depth0,helpers,partials,data) {
    return "req -> {\n      req.response()\n        .putHeader(\"content-type\", \"text/plain\")\n        .end(\"Hello from Vert.x!\");\n    }";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "package "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ";\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.graalNativeImage : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "import io.vertx.core.AbstractVerticle;\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\npublic class MainVerticle extends AbstractVerticle {\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.graalNativeImage : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  @Override\n  public void start() {\n    // your code goes here...\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    vertx.createHttpServer().requestHandler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + ").listen(8080, res -> {\n      if (res.failed()) {\n        res.cause().printStackTrace();\n      } else {\n        System.out.println(\"Server listening at: http://localhost:8080/\");\n      }\n    });\n  }\n}\n";
},"useData":true})
exports['verticle/src/main/kotlin/{packageDir}/MainVerticle.kt'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "import java.time.Instant\nimport java.time.temporal.ChronoUnit.DAYS\nimport java.util.*\n\nimport io.vertx.kotlin.core.json.array\nimport io.vertx.kotlin.core.json.json\nimport io.vertx.kotlin.core.json.obj\n\nimport io.vertx.ext.web.Router\nimport io.vertx.ext.web.handler.StaticHandler\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "import io.vertx.ext.web.templ.HandlebarsTemplateEngine\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "import xyz.jetdrone.vertx.hot.reload.HotReload\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    var router = Router.router(vertx)\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    router.get(\"/\").handler({ ctx ->\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web-templ-handlebars"] : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "    })\n\n    // the example weather API\n    var SUMMARIES = listOf(\"Freezing\", \"Bracing\", \"Chilly\", \"Cool\", \"Mild\", \"Warm\", \"Balmy\", \"Hot\", \"Sweltering\", \"Scorching\")\n\n    router.get(\"/api/weather-forecasts\").handler({ ctx ->\n      var response = json {\n        array()\n      }\n\n      var now = Instant.now()\n      var rnd = Random()\n\n      for (i in 1..5) {\n        var forecast = json {\n          obj(\n            \"dateFormatted\" to now.plus(i.toLong(), DAYS),\n            \"temperatureC\" to -20 + rnd.nextInt(35),\n            \"summary\" to SUMMARIES[rnd.nextInt(SUMMARIES.size)]\n          )\n        }\n\n        forecast.put(\"temperatureF\", 32 + (forecast.getInteger(\"temperatureC\") / 0.5556))\n\n        response.add(forecast)\n      }\n\n      ctx.response()\n        .putHeader(\"Content-Type\", \"application/json\")\n        .end(response.toString())\n    })\n\n    // Serve the static resources\n    router.route().handler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["xyz.jetdrone:hot-reload"] : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + ")\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "    var engine = HandlebarsTemplateEngine.create()\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    // development hot reload\n    router.get().handler(HotReload.create())\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "      // we define a hardcoded title for our application\n      ctx.put(\"title\", \"Home Page\")\n      ctx.put(\"hotreload\", System.getenv(\"VERTX_HOT_RELOAD\"))\n\n      engine.render(ctx, \"templates\", \"/index.hbs\", { res ->\n        if (res.succeeded()) {\n          ctx.response().end(res.result())\n        } else {\n          ctx.fail(res.cause())\n        }\n      })\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "      ctx.response()\n        .putHeader(\"content-type\", \"text/plain\")\n        .end(\"Hello from Vert.x!\")\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "HotReload.createStaticHandler()";
},"17":function(container,depth0,helpers,partials,data) {
    return "StaticHandler.create()";
},"19":function(container,depth0,helpers,partials,data) {
    return "router::accept";
},"21":function(container,depth0,helpers,partials,data) {
    return "{ req ->\n      req.response()\n        .putHeader(\"content-type\", \"text/plain\")\n        .end(\"Hello from Vert.x!\")\n    }";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "package "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + "\n\nimport io.vertx.core.AbstractVerticle\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nclass MainVerticle : AbstractVerticle() {\n\n  override fun start() {\n    // your code goes here...\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    vertx.createHttpServer().requestHandler("
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.dependenciesGAV : depth0)) != null ? stack1["io.vertx:vertx-web"] : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + ").listen(8080, { res ->\n      if (res.failed()) {\n        res.cause().printStackTrace()\n      } else {\n        System.out.println(\"Server listening at: http://localhost:8080/\")\n      }\n    })\n  }\n}\n";
},"useData":true})
exports['verticle/src/main/resources/templates/index.hbs'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n  <title>{{ title }}</title>\n  <base href=\"/\"/>\n\n  <link rel=\"stylesheet\" href=\"/dist/vendor.css\"/>\n</head>\n<body>\n  <div id=\"app\">Loading...</div>\n\n  <script src=\"/dist/vendor.js\"></script>\n  <script src=\"/dist/main.js\"></script>\n  {{#if hotreload}}\n  <script src=\"/hot-reload/script\"></script>\n  {{/if}}\n</body>\n</html>\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/app.module.browser.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { AppModuleShared } from './app.module.shared';\nimport { AppComponent } from './components/app/app.component';\n\n@NgModule({\n    bootstrap: [ AppComponent ],\n    imports: [\n        BrowserModule,\n        AppModuleShared\n    ],\n    providers: [\n        { provide: 'BASE_URL', useFactory: getBaseUrl }\n    ]\n})\nexport class AppModule {\n}\n\nexport function getBaseUrl() {\n    return document.getElementsByTagName('base')[0].href;\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/app.module.server.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { NgModule } from '@angular/core';\nimport { ServerModule } from '@angular/platform-server';\nimport { AppModuleShared } from './app.module.shared';\nimport { AppComponent } from './components/app/app.component';\n\n@NgModule({\n    bootstrap: [ AppComponent ],\n    imports: [\n        ServerModule,\n        AppModuleShared\n    ]\n})\nexport class AppModule {\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/app.module.shared.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { HttpModule } from '@angular/http';\nimport { RouterModule } from '@angular/router';\n\nimport { AppComponent } from './components/app/app.component';\nimport { NavMenuComponent } from './components/navmenu/navmenu.component';\nimport { HomeComponent } from './components/home/home.component';\nimport { FetchDataComponent } from './components/fetchdata/fetchdata.component';\nimport { CounterComponent } from './components/counter/counter.component';\n\n@NgModule({\n    declarations: [\n        AppComponent,\n        NavMenuComponent,\n        CounterComponent,\n        FetchDataComponent,\n        HomeComponent\n    ],\n    imports: [\n        CommonModule,\n        HttpModule,\n        FormsModule,\n        RouterModule.forRoot([\n            { path: '', redirectTo: 'home', pathMatch: 'full' },\n            { path: 'home', component: HomeComponent },\n            { path: 'counter', component: CounterComponent },\n            { path: 'fetch-data', component: FetchDataComponent },\n            { path: '**', redirectTo: 'home' }\n        ])\n    ]\n})\nexport class AppModuleShared {\n}\n";
},"useData":true})
exports['web+knockout/src/main/js/css/site.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return ".main-nav li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\n.main-nav li a.active,\n.main-nav li a.active:hover,\n.main-nav li a.active:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    body {\n        padding-top: 50px;\n    }\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .main-nav .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .main-nav .navbar-header {\n        float: none;\n    }\n    .main-nav .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .main-nav .navbar ul {\n        float: none;\n    }\n    .main-nav .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .main-nav .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .main-nav .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n";
},"useData":true})
exports['web+knockout/src/main/resources/templates/index.hbs'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>{{ title }}</title>\n  <base href=\"/\" />\n\n  <link rel=\"stylesheet\" href=\"/dist/vendor.css\"/>\n</head>\n<body>\n\n  <app-root params=\"history: history, basename: basename\"></app-root>\n\n  <script src=\"/dist/vendor.js\"></script>\n  <script src=\"/dist/main.js\"></script>\n</body>\n</html>\n";
},"useData":true})
exports['web+mongo/src/main/java/{packageDir}/MainVerticle.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "package "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ";\n\nimport io.vertx.core.AbstractVerticle;\nimport io.vertx.core.http.HttpHeaders;\nimport io.vertx.core.json.JsonArray;\nimport io.vertx.core.json.JsonObject;\nimport io.vertx.ext.mongo.MongoClient;\nimport io.vertx.ext.web.Router;\nimport io.vertx.ext.web.handler.BodyHandler;\nimport io.vertx.ext.web.handler.StaticHandler;\nimport io.vertx.ext.web.templ.JadeTemplateEngine;\n\n/**\n * This is an example application to showcase the usage of MongDB and Vert.x Web.\n *\n * In this application you will see the usage of:\n *\n *  * JADE templates\n *  * Mongo Client\n *  * Vert.x Web\n *\n * The application allows to list, create and delete mongo documents using a simple web interface.\n *\n */\npublic class "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.className : stack1), depth0)) != null ? stack1 : "")
    + " extends AbstractVerticle {\n\n  @Override\n  public void start() throws Exception {\n\n    // Create a mongo client using all defaults (connect to localhost and default port) using the database name \"demo\".\n    final MongoClient mongo = MongoClient.createShared(vertx, new JsonObject().put(\"db_name\", \"demo\"));\n\n    // In order to use a JADE template we first need to create an engine\n    final JadeTemplateEngine jade = JadeTemplateEngine.create();\n\n    // To simplify the development of the web components we use a Router to route all HTTP requests\n    // to organize our code in a reusable way.\n    final Router router = Router.router(vertx);\n\n    // Enable the body parser to we can get the form data and json documents in out context.\n    router.route().handler(BodyHandler.create());\n\n    // Entry point to the application, this will render a custom JADE template.\n    router.get(\"/\").handler(ctx -> {\n      // we define a hardcoded title for our application\n      ctx.put(\"title\", \"Vert.x Web\");\n\n      // and now delegate to the engine to render it.\n      jade.render(ctx, \"templates/index\", res -> {\n        if (res.succeeded()) {\n          ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, \"text/html\").end(res.result());\n        } else {\n          ctx.fail(res.cause());\n        }\n      });\n    });\n\n    // and now we mount the handlers in their appropriate routes\n\n    // Read all users from the mongo collection.\n    router.get(\"/users\").handler(ctx -> {\n      // issue a find command to mongo to fetch all documents from the \"users\" collection.\n      mongo.find(\"users\", new JsonObject(), lookup -> {\n        // error handling\n        if (lookup.failed()) {\n          ctx.fail(lookup.cause());\n          return;\n        }\n\n        // now convert the list to a JsonArray because it will be easier to encode the final object as the response.\n        final JsonArray json = new JsonArray();\n        for (JsonObject o : lookup.result()) {\n          json.add(o);\n        }\n\n        // since we are producing json we should inform the browser of the correct content type.\n        ctx.response().putHeader(HttpHeaders.CONTENT_TYPE, \"application/json\");\n        // encode to json string\n        ctx.response().end(json.encode());\n      });\n    });\n\n    // Create a new document on mongo.\n    router.post(\"/users\").handler(ctx -> {\n      // since jquery is sending data in multipart-form format to avoid preflight calls, we need to convert it to JSON.\n      JsonObject user = new JsonObject()\n              .put(\"username\", ctx.request().getFormAttribute(\"username\"))\n              .put(\"email\", ctx.request().getFormAttribute(\"email\"))\n              .put(\"fullname\", ctx.request().getFormAttribute(\"fullname\"))\n              .put(\"location\", ctx.request().getFormAttribute(\"location\"))\n              .put(\"age\", ctx.request().getFormAttribute(\"age\"))\n              .put(\"gender\", ctx.request().getFormAttribute(\"gender\"));\n\n      // insert into mongo\n      mongo.insert(\"users\", user, lookup -> {\n        // error handling\n        if (lookup.failed()) {\n          ctx.fail(lookup.cause());\n          return;\n        }\n\n        // inform that the document was created\n        ctx.response().setStatusCode(201);\n        ctx.response().end();\n      });\n    });\n\n    // Remove a document from mongo.\n    router.delete(\"/users/:id\").handler(ctx -> {\n      // catch the id to remove from the url /users/:id and transform it to a mongo query.\n      mongo.removeOne(\"users\", new JsonObject().put(\"_id\", ctx.request().getParam(\"id\")), lookup -> {\n        // error handling\n        if (lookup.failed()) {\n          ctx.fail(lookup.cause());\n          return;\n        }\n\n        // inform the browser that there is nothing to return.\n        ctx.response().setStatusCode(204);\n        ctx.response().end();\n      });\n    });\n\n    // Serve the non private static pages\n    router.route().handler(StaticHandler.create());\n\n    // start a HTTP web server on port 8080\n    vertx.createHttpServer().requestHandler(router::accept).listen(8080);\n  }\n}\n";
},"useData":true})
exports['web+mongo/src/main/resources/templates/index.jade'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "extends layout\n\nblock content\n    h1= context.title\n    p Welcome to our test\n\n    #wrapper\n        #userInfo\n            h2 User Info\n            p\n                strong Name:\n                |  <span id='userInfoName'></span>\n                br\n                strong Age:\n                |  <span id='userInfoAge'></span>\n                br\n                strong Gender:\n                |  <span id='userInfoGender'></span>\n                br\n                strong Location:\n                |  <span id='userInfoLocation'></span>\n\n        h2 User List\n        #userList\n            table\n                thead\n                    th UserName\n                    th Email\n                    th Delete?\n                tbody\n\n        h2 Add User\n        #addUser\n            fieldset\n                input#inputUserName(type='text', placeholder='Username')\n                input#inputUserEmail(type='text', placeholder='Email')\n                br\n                input#inputUserFullname(type='text', placeholder='Full Name')\n                input#inputUserAge(type='text', placeholder='Age')\n                br\n                input#inputUserLocation(type='text', placeholder='Location')\n                input#inputUserGender(type='text', placeholder='gender')\n                br\n                button#btnAddUser Add User\n";
},"useData":true})
exports['web+mongo/src/main/resources/templates/layout.jade'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "doctype html\nhtml\n    head\n        title= context.title\n        link(rel='stylesheet', href='/css/style.css')\n    body\n        block content\n        script(src='http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js')\n        script(src='/js/app.js')\n";
},"useData":true})
exports['web+react/src/main/js/components/Counter.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { RouteComponentProps } from 'react-router';\n\nexport class Counter extends React.Component {\n    constructor() {\n        super();\n        this.state = { currentCount: 0 };\n    }\n\n    render() {\n        return <div>\n            <h1>Counter</h1>\n\n            <p>This is a simple example of a React component.</p>\n\n            <p>Current count: <strong>{ this.state.currentCount }</strong></p>\n\n            <button onClick={ () => { this.incrementCounter() } }>Increment</button>\n        </div>;\n    }\n\n    incrementCounter() {\n        this.setState({\n            currentCount: this.state.currentCount + 1\n        });\n    }\n}\n";
},"useData":true})
exports['web+react/src/main/js/components/FetchData.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { RouteComponentProps } from 'react-router';\nimport 'isomorphic-fetch';\n\nexport class FetchData extends React.Component {\n    constructor() {\n        super();\n        this.state = { forecasts: [], loading: true };\n\n        fetch('api/weather-forecasts')\n            .then(response => response.json())\n            .then(data => {\n                this.setState({ forecasts: data, loading: false });\n            });\n    }\n\n    render() {\n        let contents = this.state.loading\n            ? <p><em>Loading...</em></p>\n            : FetchData.renderForecastsTable(this.state.forecasts);\n\n        return <div>\n            <h1>Weather forecast</h1>\n            <p>This component demonstrates fetching data from the server.</p>\n            { contents }\n        </div>;\n    }\n\n    static renderForecastsTable(forecasts) {\n        return <table className='table'>\n            <thead>\n                <tr>\n                    <th>Date</th>\n                    <th>Temp. (C)</th>\n                    <th>Temp. (F)</th>\n                    <th>Summary</th>\n                </tr>\n            </thead>\n            <tbody>\n            {forecasts.map(forecast =>\n                <tr key={ forecast.dateFormatted }>\n                    <td>{ forecast.dateFormatted }</td>\n                    <td>{ forecast.temperatureC }</td>\n                    <td>{ forecast.temperatureF }</td>\n                    <td>{ forecast.summary }</td>\n                </tr>\n            )}\n            </tbody>\n        </table>;\n    }\n}\n";
},"useData":true})
exports['web+react/src/main/js/components/Home.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { RouteComponentProps } from 'react-router';\n\nexport class Home extends React.Component {\n    render() {\n        return <div>\n            <h1>Hello, world!</h1>\n            <p>Welcome to your new single-page application, built with:</p>\n            <ul>\n                <li><a href='http://vertx.io/'>Vert.x</a> for cross-platform server-side code</li>\n                <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>\n                <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n            </ul>\n            <p>To help you get started, we've also set up:</p>\n            <ul>\n                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n                <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n                <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.</li>\n                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n            </ul>\n            <h4>Going further</h4>\n            <p>\n                For larger applications, or for server-side prerendering (i.e., for <em>isomorphic</em> or <em>universal</em> applications), you should consider using a Flux/Redux-like architecture.\n                You can generate an ASP.NET Core application with React and Redux using <code>dotnet new reactredux</code> instead of using this template.\n            </p>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react/src/main/js/components/Layout.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { NavMenu } from './NavMenu';\n\nexport class Layout extends React.Component {\n    render() {\n        return <div className='container-fluid'>\n            <div className='row'>\n                <div className='col-sm-3'>\n                    <NavMenu />\n                </div>\n                <div className='col-sm-9'>\n                    { this.props.children }\n                </div>\n            </div>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react/src/main/js/components/NavMenu.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { Link, NavLink } from 'react-router-dom';\n\nexport class NavMenu extends React.Component {\n    render() {\n        return <div className='main-nav'>\n                <div className='navbar navbar-inverse'>\n                <div className='navbar-header'>\n                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                        <span className='sr-only'>Toggle navigation</span>\n                        <span className='icon-bar'></span>\n                        <span className='icon-bar'></span>\n                        <span className='icon-bar'></span>\n                    </button>\n                    <Link className='navbar-brand' to={ '/' }>WebApplicationBasic</Link>\n                </div>\n                <div className='clearfix'></div>\n                <div className='navbar-collapse collapse'>\n                    <ul className='nav navbar-nav'>\n                        <li>\n                            <NavLink to={ '/' } exact activeClassName='active'>\n                                <span className='glyphicon glyphicon-home'></span> Home\n                            </NavLink>\n                        </li>\n                        <li>\n                            <NavLink to={ '/counter' } activeClassName='active'>\n                                <span className='glyphicon glyphicon-education'></span> Counter\n                            </NavLink>\n                        </li>\n                        <li>\n                            <NavLink to={ '/fetchdata' } activeClassName='active'>\n                                <span className='glyphicon glyphicon-th-list'></span> Fetch data\n                            </NavLink>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react/src/main/js/css/site.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return ".main-nav li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\n.main-nav li a.active,\n.main-nav li a.active:hover,\n.main-nav li a.active:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    body {\n        padding-top: 50px;\n    }\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .main-nav .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .main-nav .navbar-header {\n        float: none;\n    }\n    .main-nav .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .main-nav .navbar ul {\n        float: none;\n    }\n    .main-nav .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .main-nav .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .main-nav .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n";
},"useData":true})
exports['web+react+typescript/src/main/ts/components/Counter.tsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { RouteComponentProps } from 'react-router';\n\ninterface CounterState {\n    currentCount: number;\n}\n\nexport class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {\n    constructor() {\n        super();\n        this.state = { currentCount: 0 };\n    }\n\n    public render() {\n        return <div>\n            <h1>Counter</h1>\n\n            <p>This is a simple example of a React component.</p>\n\n            <p>Current count: <strong>{ this.state.currentCount }</strong></p>\n\n            <button onClick={ () => { this.incrementCounter() } }>Increment</button>\n        </div>;\n    }\n\n    incrementCounter() {\n        this.setState({\n            currentCount: this.state.currentCount + 1\n        });\n    }\n}\n";
},"useData":true})
exports['web+react+typescript/src/main/ts/components/FetchData.tsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { RouteComponentProps } from 'react-router';\nimport 'isomorphic-fetch';\n\ninterface FetchDataExampleState {\n    forecasts: WeatherForecast[];\n    loading: boolean;\n}\n\nexport class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {\n    constructor() {\n        super();\n        this.state = { forecasts: [], loading: true };\n\n        fetch('api/weather-forecasts')\n            .then(response => response.json() as Promise<WeatherForecast[]>)\n            .then(data => {\n                this.setState({ forecasts: data, loading: false });\n            });\n    }\n\n    public render() {\n        let contents = this.state.loading\n            ? <p><em>Loading...</em></p>\n            : FetchData.renderForecastsTable(this.state.forecasts);\n\n        return <div>\n            <h1>Weather forecast</h1>\n            <p>This component demonstrates fetching data from the server.</p>\n            { contents }\n        </div>;\n    }\n\n    private static renderForecastsTable(forecasts: WeatherForecast[]) {\n        return <table className='table'>\n            <thead>\n                <tr>\n                    <th>Date</th>\n                    <th>Temp. (C)</th>\n                    <th>Temp. (F)</th>\n                    <th>Summary</th>\n                </tr>\n            </thead>\n            <tbody>\n            {forecasts.map(forecast =>\n                <tr key={ forecast.dateFormatted }>\n                    <td>{ forecast.dateFormatted }</td>\n                    <td>{ forecast.temperatureC }</td>\n                    <td>{ forecast.temperatureF }</td>\n                    <td>{ forecast.summary }</td>\n                </tr>\n            )}\n            </tbody>\n        </table>;\n    }\n}\n\ninterface WeatherForecast {\n    dateFormatted: string;\n    temperatureC: number;\n    temperatureF: number;\n    summary: string;\n}\n";
},"useData":true})
exports['web+react+typescript/src/main/ts/components/Home.tsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { RouteComponentProps } from 'react-router';\n\nexport class Home extends React.Component<RouteComponentProps<{}>, {}> {\n    public render() {\n        return <div>\n            <h1>Hello, world!</h1>\n            <p>Welcome to your new single-page application, built with:</p>\n            <ul>\n                <li><a href='http://vertx.io/'>Vert.x</a> for cross-platform server-side code</li>\n                <li><a href='https://facebook.github.io/react/'>React</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n                <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n            </ul>\n            <p>To help you get started, we've also set up:</p>\n            <ul>\n                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n                <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n                <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.</li>\n                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n            </ul>\n            <h4>Going further</h4>\n            <p>\n                For larger applications, or for server-side prerendering (i.e., for <em>isomorphic</em> or <em>universal</em> applications), you should consider using a Flux/Redux-like architecture.\n                You can generate an ASP.NET Core application with React and Redux using <code>dotnet new reactredux</code> instead of using this template.\n            </p>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react+typescript/src/main/ts/components/Layout.tsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { NavMenu } from './NavMenu';\n\nexport interface LayoutProps {\n    children?: React.ReactNode;\n}\n\nexport class Layout extends React.Component<LayoutProps, {}> {\n    public render() {\n        return <div className='container-fluid'>\n            <div className='row'>\n                <div className='col-sm-3'>\n                    <NavMenu />\n                </div>\n                <div className='col-sm-9'>\n                    { this.props.children }\n                </div>\n            </div>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react+typescript/src/main/ts/components/NavMenu.tsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { Link, NavLink } from 'react-router-dom';\n\nexport class NavMenu extends React.Component<{}, {}> {\n    public render() {\n        return <div className='main-nav'>\n                <div className='navbar navbar-inverse'>\n                <div className='navbar-header'>\n                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                        <span className='sr-only'>Toggle navigation</span>\n                        <span className='icon-bar'></span>\n                        <span className='icon-bar'></span>\n                        <span className='icon-bar'></span>\n                    </button>\n                    <Link className='navbar-brand' to={ '/' }>WebApplicationBasic</Link>\n                </div>\n                <div className='clearfix'></div>\n                <div className='navbar-collapse collapse'>\n                    <ul className='nav navbar-nav'>\n                        <li>\n                            <NavLink to={ '/' } exact activeClassName='active'>\n                                <span className='glyphicon glyphicon-home'></span> Home\n                            </NavLink>\n                        </li>\n                        <li>\n                            <NavLink to={ '/counter' } activeClassName='active'>\n                                <span className='glyphicon glyphicon-education'></span> Counter\n                            </NavLink>\n                        </li>\n                        <li>\n                            <NavLink to={ '/fetchdata' } activeClassName='active'>\n                                <span className='glyphicon glyphicon-th-list'></span> Fetch data\n                            </NavLink>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react+typescript/src/main/ts/css/site.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return ".main-nav li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\n.main-nav li a.active,\n.main-nav li a.active:hover,\n.main-nav li a.active:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    body {\n        padding-top: 50px;\n    }\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .main-nav .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .main-nav .navbar-header {\n        float: none;\n    }\n    .main-nav .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .main-nav .navbar ul {\n        float: none;\n    }\n    .main-nav .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .main-nav .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .main-nav .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n";
},"useData":true})
exports['web+react-redux/src/main/js/components/Counter.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { Link, RouteComponentProps } from 'react-router-dom';\nimport { connect } from 'react-redux';\nimport { ApplicationState }  from '../store';\nimport * as CounterStore from '../store/Counter';\n\nclass Counter extends React.Component {\n    render() {\n        return <div>\n            <h1>Counter</h1>\n\n            <p>This is a simple example of a React component.</p>\n\n            <p>Current count: <strong>{ this.props.count }</strong></p>\n\n            <button onClick={ () => { this.props.increment() } }>Increment</button>\n        </div>;\n    }\n}\n\n// Wire up the React component to the Redux store\nexport default connect(\n    (state) => state.counter,                   // Selects which state properties are merged into the component's props\n    CounterStore.actionCreators                 // Selects which action creators are merged into the component's props\n)(Counter);\n";
},"useData":true})
exports['web+react-redux/src/main/js/components/FetchData.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { Link, RouteComponentProps } from 'react-router-dom';\nimport { connect } from 'react-redux';\nimport { ApplicationState }  from '../store';\nimport * as WeatherForecastsState from '../store/WeatherForecasts';\n\nclass FetchData extends React.Component {\n    componentWillMount() {\n        // This method runs when the component is first added to the page\n        let startDateIndex = parseInt(this.props.match.params.startDateIndex) || 0;\n        this.props.requestWeatherForecasts(startDateIndex);\n    }\n\n    componentWillReceiveProps(nextProps) {\n        // This method runs when incoming props (e.g., route params) change\n        let startDateIndex = parseInt(nextProps.match.params.startDateIndex) || 0;\n        this.props.requestWeatherForecasts(startDateIndex);\n    }\n\n    render() {\n        return <div>\n            <h1>Weather forecast</h1>\n            <p>This component demonstrates fetching data from the server and working with URL parameters.</p>\n            { this.renderForecastsTable() }\n            { this.renderPagination() }\n        </div>;\n    }\n\n    renderForecastsTable() {\n        return <table className='table'>\n            <thead>\n                <tr>\n                    <th>Date</th>\n                    <th>Temp. (C)</th>\n                    <th>Temp. (F)</th>\n                    <th>Summary</th>\n                </tr>\n            </thead>\n            <tbody>\n            {this.props.forecasts.map(forecast =>\n                <tr key={ forecast.dateFormatted }>\n                    <td>{ forecast.dateFormatted }</td>\n                    <td>{ forecast.temperatureC }</td>\n                    <td>{ forecast.temperatureF }</td>\n                    <td>{ forecast.summary }</td>\n                </tr>\n            )}\n            </tbody>\n        </table>;\n    }\n\n    renderPagination() {\n        let prevStartDateIndex = (this.props.startDateIndex || 0) - 5;\n        let nextStartDateIndex = (this.props.startDateIndex || 0) + 5;\n\n        return <p className='clearfix text-center'>\n            <Link className='btn btn-default pull-left' to={ `/fetchdata/${ prevStartDateIndex }` }>Previous</Link>\n            <Link className='btn btn-default pull-right' to={ `/fetchdata/${ nextStartDateIndex }` }>Next</Link>\n            { this.props.isLoading ? <span>Loading...</span> : [] }\n        </p>;\n    }\n}\n\nexport default connect(\n    (state) => state.weatherForecasts, // Selects which state properties are merged into the component's props\n    WeatherForecastsState.actionCreators                 // Selects which action creators are merged into the component's props\n)(FetchData);\n";
},"useData":true})
exports['web+react-redux/src/main/js/components/Home.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { RouteComponentProps } from 'react-router-dom';\n\nexport default class Home extends React.Component {\n    render() {\n        return <div>\n            <h1>Hello, world!</h1>\n            <p>Welcome to your new single-page application, built with:</p>\n            <ul>\n                <li><a href='http://vertx.io/'>Vert.x</a> for polyglot server-side code</li>\n                <li><a href='https://facebook.github.io/react/'>React</a>, <a href='http://redux.js.org'>Redux</a>, and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n                <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n            </ul>\n            <p>To help you get started, we've also set up:</p>\n            <ul>\n                <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n                <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n                <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.</li>\n                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n                <li><strong>Server-side prerendering</strong>. To optimize startup time, your React application is first rendered on the server. The initial HTML and state is then transferred to the browser, where client-side code picks up where the server left off.</li>\n            </ul>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react-redux/src/main/js/components/Layout.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { NavMenu } from './NavMenu';\n\nexport class Layout extends React.Component {\n    render() {\n        return <div className='container-fluid'>\n            <div className='row'>\n                <div className='col-sm-3'>\n                    <NavMenu />\n                </div>\n                <div className='col-sm-9'>\n                    { this.props.children }\n                </div>\n            </div>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react-redux/src/main/js/components/NavMenu.jsx'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as React from 'react';\nimport { NavLink, Link } from 'react-router-dom';\n\nexport class NavMenu extends React.Component {\n    render() {\n        return <div className='main-nav'>\n                <div className='navbar navbar-inverse'>\n                <div className='navbar-header'>\n                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                        <span className='sr-only'>Toggle navigation</span>\n                        <span className='icon-bar'></span>\n                        <span className='icon-bar'></span>\n                        <span className='icon-bar'></span>\n                    </button>\n                    <Link className='navbar-brand' to={ '/' }>WebApplicationBasic</Link>\n                </div>\n                <div className='clearfix'></div>\n                <div className='navbar-collapse collapse'>\n                    <ul className='nav navbar-nav'>\n                        <li>\n                            <NavLink exact to={ '/' } activeClassName='active'>\n                                <span className='glyphicon glyphicon-home'></span> Home\n                            </NavLink>\n                        </li>\n                        <li>\n                            <NavLink to={ '/counter' } activeClassName='active'>\n                                <span className='glyphicon glyphicon-education'></span> Counter\n                            </NavLink>\n                        </li>\n                        <li>\n                            <NavLink to={ '/fetchdata' } activeClassName='active'>\n                                <span className='glyphicon glyphicon-th-list'></span> Fetch data\n                            </NavLink>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>;\n    }\n}\n";
},"useData":true})
exports['web+react-redux/src/main/js/css/site.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return ".main-nav li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\n.main-nav li a.active,\n.main-nav li a.active:hover,\n.main-nav li a.active:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    body {\n        padding-top: 50px;\n    }\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .main-nav .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .main-nav .navbar-header {\n        float: none;\n    }\n    .main-nav .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .main-nav .navbar ul {\n        float: none;\n    }\n    .main-nav .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .main-nav .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .main-nav .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n";
},"useData":true})
exports['web+react-redux/src/main/js/store/Counter.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { Action, Reducer } from 'redux';\n\n// ----------------\n// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.\n// They don't directly mutate state, but they can have external side-effects (such as loading data).\n\nexport const actionCreators = {\n    increment: () => {\n      return {\n        type: 'INCREMENT_COUNT'\n      }\n    },\n    decrement: () => {\n      return {\n        type: 'DECREMENT_COUNT'\n      }\n    }\n};\n\n// ----------------\n// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.\n\nexport const reducer = (state, action) => {\n    switch (action.type) {\n        case 'INCREMENT_COUNT':\n            return { count: state.count + 1 };\n        case 'DECREMENT_COUNT':\n            return { count: state.count - 1 };\n        default:\n            // The following line guarantees that every action in the KnownAction union has been covered by a case above\n            const exhaustiveCheck = action;\n    }\n\n    // For unrecognized actions (or in cases where actions have no effect), must return the existing state\n    //  (or default initial state if none was supplied)\n    return state || { count: 0 };\n};\n";
},"useData":true})
exports['web+react-redux/src/main/js/store/WeatherForecasts.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { fetch, addTask } from 'domain-task';\nimport { Action, Reducer, ActionCreator } from 'redux';\nimport { AppThunkAction } from './';\n\n// ----------------\n// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.\n// They don't directly mutate state, but they can have external side-effects (such as loading data).\n\nexport const actionCreators = {\n    requestWeatherForecasts: (startDateIndex) => (dispatch, getState) => {\n        // Only load data if it's something we don't already have (and are not already loading)\n        if (startDateIndex !== getState().weatherForecasts.startDateIndex) {\n            let fetchTask = fetch(`api/weather-forecasts?startDateIndex=${ startDateIndex }`)\n                .then(response => response.json())\n                .then(data => {\n                    dispatch({ type: 'RECEIVE_WEATHER_FORECASTS', startDateIndex: startDateIndex, forecasts: data });\n                });\n\n            addTask(fetchTask); // Ensure server-side prerendering waits for this to complete\n            dispatch({ type: 'REQUEST_WEATHER_FORECASTS', startDateIndex: startDateIndex });\n        }\n    }\n};\n\n// ----------------\n// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.\n\nconst unloadedState = { forecasts: [], isLoading: false };\n\nexport const reducer = (state, incomingAction) => {\n    const action = incomingAction;\n    switch (action.type) {\n        case 'REQUEST_WEATHER_FORECASTS':\n            return {\n                startDateIndex: action.startDateIndex,\n                forecasts: state.forecasts,\n                isLoading: true\n            };\n        case 'RECEIVE_WEATHER_FORECASTS':\n            // Only accept the incoming data if it matches the most recent request. This ensures we correctly\n            // handle out-of-order responses.\n            if (action.startDateIndex === state.startDateIndex) {\n                return {\n                    startDateIndex: action.startDateIndex,\n                    forecasts: action.forecasts,\n                    isLoading: false\n                };\n            }\n            break;\n        default:\n            // The following line guarantees that every action in the KnownAction union has been covered by a case above\n            const exhaustiveCheck = action;\n    }\n\n    return state || unloadedState;\n};\n";
},"useData":true})
exports['web+react-redux/src/main/js/store/index.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as WeatherForecasts from './WeatherForecasts';\nimport * as Counter from './Counter';\n\n// Whenever an action is dispatched, Redux will update each top-level application state property using\n// the reducer with the matching name. It's important that the names match exactly, and that the reducer\n// acts on the corresponding ApplicationState property type.\nexport const reducers = {\n    counter: Counter.reducer,\n    weatherForecasts: WeatherForecasts.reducer\n};\n";
},"useData":true})
exports['web+vue/src/main/js/css/site.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    body {\n        padding-top: 50px;\n    }\n}";
},"useData":true})
exports['openapi/src/main/java/{packageDir}/models/package-info.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "@ModuleGen(name = \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "\", groupPackage = \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.groupId : stack1), depth0)) != null ? stack1 : "")
    + "\")\npackage "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".models;\n\nimport io.vertx.codegen.annotations.ModuleGen;";
},"useData":true})
exports['openapi/src/main/java/{packageDir}/models/{modelName}.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = helpers["if"].call(alias1,(helpers.eq || (depth0 && depth0.eq) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"boolean",{"name":"eq","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"toVariableName","hash":{},"data":data}),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "is";
},"4":function(container,depth0,helpers,partials,data) {
    return "get";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "  private "
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,"java",depth0,(depths[1] != null ? depths[1].modelsCache : depths[1]),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + ";\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    "
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,"java",depth0,(depths[1] != null ? depths[1].modelsCache : depths[1]),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return ",";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + " = "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + ";\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + " = other."
    + ((stack1 = container.invokePartial(partials.getFnName,depth0,{"name":"getFnName","hash":{"type":(depth0 != null ? depth0.type : depth0),"name":(data && data.key)},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "();\n";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "  @Fluent public "
    + ((stack1 = container.lambda((depths[1] != null ? depths[1].modelName : depths[1]), depth0)) != null ? stack1 : "")
    + " set"
    + ((stack1 = (helpers.capitalize || (depth0 && depth0.capitalize) || alias2).call(alias1,(helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data}),{"name":"capitalize","hash":{},"data":data})) != null ? stack1 : "")
    + "("
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,"java",depth0,(depths[1] != null ? depths[1].modelsCache : depths[1]),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "){\n    this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + " = "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + ";\n    return this;\n  }\n  public "
    + ((stack1 = (helpers.solveOasType || (depth0 && depth0.solveOasType) || alias2).call(alias1,"java",depth0,(depths[1] != null ? depths[1].modelsCache : depths[1]),{"name":"solveOasType","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = container.invokePartial(partials.getFnName,depth0,{"name":"getFnName","hash":{"type":(depth0 != null ? depth0.type : depth0),"name":(data && data.key)},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "() {\n    return this."
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(data && data.key),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + ";\n  }\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".models;\n\nimport io.vertx.codegen.annotations.DataObject;\nimport io.vertx.codegen.annotations.Fluent;\nimport io.vertx.core.json.JsonObject;\nimport java.util.List;\nimport java.util.Map;\n\n@DataObject(generateConverter = true, publicConverter = false)\npublic class "
    + ((stack1 = ((helper = (helper = helpers.modelName || (depth0 != null ? depth0.modelName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " {\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.schema : depth0)) != null ? stack1.properties : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  public "
    + ((stack1 = ((helper = (helper = helpers.modelName || (depth0 != null ? depth0.modelName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " (\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.schema : depth0)) != null ? stack1.properties : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  ) {\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.schema : depth0)) != null ? stack1.properties : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  }\n\n  public "
    + ((stack1 = ((helper = (helper = helpers.modelName || (depth0 != null ? depth0.modelName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "(JsonObject json) {\n    "
    + ((stack1 = ((helper = (helper = helpers.modelName || (depth0 != null ? depth0.modelName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "Converter.fromJson(json, this);\n  }\n\n  public "
    + ((stack1 = ((helper = (helper = helpers.modelName || (depth0 != null ? depth0.modelName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "("
    + ((stack1 = ((helper = (helper = helpers.modelName || (depth0 != null ? depth0.modelName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " other) {\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.schema : depth0)) != null ? stack1.properties : stack1),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  }\n\n  public JsonObject toJson() {\n    JsonObject json = new JsonObject();\n    "
    + ((stack1 = ((helper = (helper = helpers.modelName || (depth0 != null ? depth0.modelName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "Converter.toJson(this, json);\n    return json;\n  }\n\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.schema : depth0)) != null ? stack1.properties : stack1),{"name":"each","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}";
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"args":["getFnName"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true})
exports['openapi-server/src/main/java/{packageDir}/handlers/{operationId}Handler.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "RequestParameters params = routingContext.get(\"parsedParameters\");\n        ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.lambda;

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".handlers;\n\nimport io.vertx.core.Handler;\nimport io.vertx.ext.web.api.RequestParameters;\nimport io.vertx.ext.web.RoutingContext;\n\npublic class "
    + ((stack1 = alias3(((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.className : stack1), depth0)) != null ? stack1 : "")
    + "Handler implements Handler<RoutingContext> {\n\n    public "
    + ((stack1 = alias3(((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.className : stack1), depth0)) != null ? stack1 : "")
    + "Handler(){\n\n    }\n\n    @Override\n    public void handle(RoutingContext routingContext) {\n        "
    + ((stack1 = (helpers.or || (depth0 && depth0.or) || alias2).call(alias1,(helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.parsedParameters : stack1)) != null ? stack1.path : stack1),{"name":"nonEmpty","hash":{},"data":data}),(helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.parsedParameters : stack1)) != null ? stack1.cookie : stack1),{"name":"nonEmpty","hash":{},"data":data}),(helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.parsedParameters : stack1)) != null ? stack1.query : stack1),{"name":"nonEmpty","hash":{},"data":data}),(helpers.nonEmpty || (depth0 && depth0.nonEmpty) || alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.parsedParameters : stack1)) != null ? stack1.header : stack1),{"name":"nonEmpty","hash":{},"data":data}),{"name":"or","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "// Handle "
    + ((stack1 = alias3(((stack1 = (depth0 != null ? depth0.operation : depth0)) != null ? stack1.operationId : stack1), depth0)) != null ? stack1 : "")
    + "\n        routingContext.response().setStatusCode(501).setStatusMessage(\"Not Implemented\").end();\n    }\n\n}";
},"useData":true})
exports['openapi-server/src/main/java/{packageDir}/security/{securitySchemaId}Handler.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda;

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".security;\n\nimport io.vertx.core.Handler;\nimport io.vertx.ext.web.RoutingContext;\n\npublic class "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.securitySchema : depth0)) != null ? stack1.className : stack1), depth0)) != null ? stack1 : "")
    + "Handler implements Handler<RoutingContext> {\n\n    public "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.securitySchema : depth0)) != null ? stack1.className : stack1), depth0)) != null ? stack1 : "")
    + "Handler(){\n\n    }\n\n    @Override\n    public void handle(RoutingContext routingContext) {\n        // Handle "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.securitySchema : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + " security schema\n        routingContext.next();\n    }\n\n}";
},"useData":true})
exports['openapi-server-sp/src/main/java/{packageDir}/services/package-info.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "@ModuleGen(name = \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.artifactId : stack1), depth0)) != null ? stack1 : "")
    + "\", groupPackage = \""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.groupId : stack1), depth0)) != null ? stack1 : "")
    + "\")\npackage "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".services;\n\nimport io.vertx.codegen.annotations.ModuleGen;";
},"useData":true})
exports['openapi-server-sp/src/main/java/{packageDir}/services/{serviceName}.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  void "
    + ((stack1 = ((helper = (helper = helpers.serviceMethodName || (depth0 != null ? depth0.serviceMethodName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"serviceMethodName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "(\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bodySchema : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    OperationRequest context, Handler<AsyncResult<OperationResponse>> resultHandler);\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    "
    + ((stack1 = (helpers.solveOasTypeForService || (depth0 && depth0.solveOasTypeForService) || alias2).call(alias1,"java",(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasTypeForService","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ",\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    "
    + ((stack1 = (helpers.solveOasTypeForService || (depth0 && depth0.solveOasTypeForService) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"java",(depth0 != null ? depth0.bodySchema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasTypeForService","hash":{},"data":data})) != null ? stack1 : "")
    + " body,\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".services;\n\nimport io.vertx.core.AsyncResult;\nimport io.vertx.core.Handler;\nimport io.vertx.core.Vertx;\nimport io.vertx.ext.web.api.*;\nimport io.vertx.ext.web.api.generator.WebApiServiceGen;\n\nimport java.util.List;\nimport java.util.Map;\n\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".models.*;\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".services.impl."
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "Impl;\n\n@WebApiServiceGen\npublic interface "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " {\n\n  static "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " create(Vertx vertx) {\n    return new "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "Impl(vertx);\n  }\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.operations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}\n";
},"useData":true})
exports['openapi-server-sp/src/test/java/{packageDir}/services/{serviceName}Test.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "  @Test\n  public void "
    + ((stack1 = ((helper = (helper = helpers.operationId || (depth0 != null ? depth0.operationId : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"operationId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "Test(TestContext context) {\n    Async async = context.async("
    + ((stack1 = (helpers.size || (depth0 && depth0.size) || alias2).call(alias1,(depth0 != null ? depth0.responses : depth0),{"name":"size","hash":{},"data":data})) != null ? stack1 : "")
    + ");\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bodySchema : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.responses : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  }\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    "
    + ((stack1 = (helpers.solveOasTypeForService || (depth0 && depth0.solveOasTypeForService) || alias2).call(alias1,"java",(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasTypeForService","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ";\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    "
    + ((stack1 = (helpers.solveOasTypeForService || (depth0 && depth0.solveOasTypeForService) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"java",(depth0 != null ? depth0.bodySchema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasTypeForService","hash":{},"data":data})) != null ? stack1 : "")
    + " body;\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "\n    // TODO set parameters for "
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " response test\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].bodySchema : depths[1]),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,((stack1 = (data && data.root)) && stack1.serviceName),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + "."
    + ((stack1 = container.lambda((depths[1] != null ? depths[1].serviceMethodName : depths[1]), depth0)) != null ? stack1 : "")
    + "("
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depths[1] != null ? depths[1].parsedParameters : depths[1])) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].bodySchema : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "new OperationRequest(), ar -> {\n      if (ar.succeeded()) {\n        OperationResponse result = ar.result();\n        context.assertEquals("
    + ((stack1 = ((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ", result.getStatusCode());\n        //TODO add your asserts\n      } else {\n        context.fail(\"Operation failed with \" + ar.cause().toString());\n      }\n      async.countDown();\n    });\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " = null;\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    body = null;\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ", ";
},"13":function(container,depth0,helpers,partials,data) {
    return "body, ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".services;\n\nimport io.vertx.core.Vertx;\nimport io.vertx.ext.unit.Async;\nimport io.vertx.ext.unit.TestContext;\nimport io.vertx.ext.unit.junit.RunTestOnContext;\nimport io.vertx.ext.unit.junit.VertxUnitRunner;\nimport io.vertx.ext.web.api.*;\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Rule;\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\n\nimport java.util.List;\nimport java.util.Map;\n\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".models.*;\n\n/**\n * "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " Test\n */\n@RunWith(VertxUnitRunner.class)\npublic class "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "Test {\n\n  @Rule\n  public RunTestOnContext rule = new RunTestOnContext();\n\n  "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(depth0 != null ? depth0.serviceName : depth0),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + ";\n\n  @Before\n  public void before(TestContext context) {\n    Vertx vertx = rule.vertx();\n    "
    + ((stack1 = (helpers.toVariableName || (depth0 && depth0.toVariableName) || alias2).call(alias1,(depth0 != null ? depth0.serviceName : depth0),{"name":"toVariableName","hash":{},"data":data})) != null ? stack1 : "")
    + " = "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".create(vertx);\n    //TODO add some test initialization code like security token retrieval\n  }\n\n  @After\n  public void after(TestContext context) {\n    //TODO add some test end code like session destroy\n  }\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.operations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n}";
},"useData":true,"useDepths":true})
exports['service-proxy/src/main/java/{packageDir}/impl/{Service}Impl.java'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "package "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + ".impl;\n\nimport "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1["package"] : stack1), depth0)) != null ? stack1 : "")
    + "."
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + ";\n\nimport io.vertx.core.Vertx;\nimport io.vertx.core.json.JsonObject;\n\npublic class "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + "Impl implements "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + " {\n\n  public "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.metadata : depth0)) != null ? stack1.Service : stack1), depth0)) != null ? stack1 : "")
    + "Impl(Vertx vertx, JsonObject config) {\n    // initialization...\n  }\n\n  // TODO: Implement your service here...\n\n  public void close() {\n    // clean up...\n  }\n}\n";
},"useData":true})
exports['web+knockout/src/main/js/components/app-root/app-root.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu params='router: router'></nav-menu>\n        </div>\n        <div class='col-sm-9' data-bind='component: { name: route().page, params: route }'></div>\n    </div>\n</div>\n";
},"useData":true})
exports['web+knockout/src/main/js/components/app-root/app-root.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as ko from 'knockout';\nimport * as History from 'history';\nimport { Route, Router } from '../../router';\nimport navMenu from '../nav-menu/nav-menu';\n\n// Declare the client-side routing configuration\nconst routes = [\n    { url: '',              params: { page: 'home-page' } },\n    { url: 'counter',       params: { page: 'counter-example' } },\n    { url: 'fetch-data',    params: { page: 'fetch-data' } }\n];\n\nclass AppRootViewModel {\n\n    constructor(params) {\n        // Activate the client-side router\n        this.router = new Router(params.history, routes, params.basename);\n        this.route = this.router.currentRoute;\n\n        // Load and register all the KO components needed to handle the routes\n        // The optional 'bundle-loader?lazy!' prefix is a Webpack feature that causes the referenced modules\n        // to be split into separate files that are then loaded on demand.\n        // For docs, see https://github.com/webpack/bundle-loader\n        ko.components.register('nav-menu', navMenu);\n        ko.components.register('home-page', require('bundle-loader?lazy!../home-page/home-page'));\n        ko.components.register('counter-example', require('bundle-loader?lazy!../counter-example/counter-example'));\n        ko.components.register('fetch-data', require('bundle-loader?lazy!../fetch-data/fetch-data'));\n    }\n\n    // To support hot module replacement, this method unregisters the router and KO components.\n    // In production scenarios where hot module replacement is disabled, this would not be invoked.\n    dispose() {\n        this.router.dispose();\n\n        // TODO: Need a better API for this\n        Object.getOwnPropertyNames(ko.components._allRegisteredComponents).forEach(componentName => {\n            ko.components.unregister(componentName);\n        });\n    }\n}\n\nexport default { viewModel: AppRootViewModel, template: require('./app-root.html') };\n";
},"useData":true})
exports['web+knockout/src/main/js/components/counter-example/counter-example.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Counter</h1>\n\n<p>This is a simple example of a Knockout component.</p>\n\n<p>Current count: <strong data-bind='text: currentCount'></strong></p>\n\n<button data-bind='click: incrementCounter'>Increment</button>\n";
},"useData":true})
exports['web+knockout/src/main/js/components/counter-example/counter-example.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as ko from 'knockout';\n\nclass CounterExampleViewModel {\n  constructor() {\n    this.currentCount = ko.observable(0);\n  }\n\n  incrementCounter() {\n    let prevCount = this.currentCount();\n    this.currentCount(prevCount + 1);\n  }\n}\n\nexport default {viewModel: CounterExampleViewModel, template: require('./counter-example.html')};\n";
},"useData":true})
exports['web+knockout/src/main/js/components/fetch-data/fetch-data.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p data-bind='ifnot: forecasts'><em>Loading...</em></p>\n\n<table class='table' data-bind='if: forecasts'>\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody data-bind='foreach: forecasts'>\n        <tr>\n            <td data-bind='text: dateFormatted'></td>\n            <td data-bind='text: temperatureC'></td>\n            <td data-bind='text: temperatureF'></td>\n            <td data-bind='text: summary'></td>\n        </tr>\n    </tbody>\n</table>\n";
},"useData":true})
exports['web+knockout/src/main/js/components/fetch-data/fetch-data.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as ko from 'knockout';\nimport 'isomorphic-fetch';\n\nclass FetchDataViewModel {\n  constructor() {\n    this.forecasts = ko.observableArray();\n\n    fetch('api/weather-forecasts')\n      .then(response => response.json())\n      .then(data => {\n        this.forecasts(data);\n      });\n  }\n}\n\nexport default {viewModel: FetchDataViewModel, template: require('./fetch-data.html')};\n";
},"useData":true})
exports['web+knockout/src/main/js/components/home-page/home-page.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='http://vertx.io/'>Vert.x</a> for polyglot server-side code</li>\n    <li><a href='http://knockoutjs.com/'>Knockout.js</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Knockout app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Code splitting and lazy loading</strong>. KO components may optionally be bundled individually and loaded on demand. For example, the code and template for 'Counter' is not loaded until you navigate to it..</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n";
},"useData":true})
exports['web+knockout/src/main/js/components/home-page/home-page.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as ko from 'knockout';\n\nclass HomePageViewModel {\n}\n\nexport default { viewModel: HomePageViewModel, template: require('./home-page.html') };\n";
},"useData":true})
exports['web+knockout/src/main/js/components/nav-menu/nav-menu.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='main-nav'>\n        <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' href='/'>WebApplicationBasic</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li>\n                    <a data-bind='attr: { href: router.link(\"/\") }, css: { active: route().page === \"home-page\" }'>\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li>\n                    <a data-bind='attr: { href: router.link(\"/counter\") }, css: { active: route().page === \"counter-example\" }'>\n                        <span class='glyphicon glyphicon-education'></span> Counter\n                    </a>\n                </li>\n                <li>\n                    <a data-bind='attr: { href: router.link(\"/fetch-data\") }, css: { active: route().page === \"fetch-data\" }'>\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";
},"useData":true})
exports['web+knockout/src/main/js/components/nav-menu/nav-menu.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import * as ko from 'knockout';\nimport {Route, Router} from '../../router';\n\nclass NavMenuViewModel {\n  constructor(params) {\n    // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.\n    // You could remove this viewmodel entirely, and define 'nav-menu' as a template-only component.\n    // But in most apps, you'll want some viewmodel logic to determine what navigation options appear.\n    this.router = params.router;\n    this.route = this.router.currentRoute;\n  }\n}\n\nexport default {viewModel: NavMenuViewModel, template: require('./nav-menu.html')};\n";
},"useData":true})
exports['web+mongo/src/main/resources/webroot/css/style.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "body {\n  padding: 30px;\n  font: 14px \"Lucida Grande\", Helvetica, Arial, sans-serif;\n}\n\nh2 {\n	margin:0 0 .5em 0;\n}\n\na {\n  color: #00B7FF;\n}\n\n#wrapper {\n	padding-left:312px;\n	position:relative;\n}\n\n#userList {\n	margin:0 0 30px 0;\n}\n	#userList table {\n		border-collapse:separate;\n		border-spacing:1px;\n		background:#CCC;\n	}\n		#userList table th {\n			background:#EEE;\n			font-weight:600;\n			padding:10px 20px;\n			text-align:center;\n		}\n		#userList table tbody {\n			padding:0; margin:0;\n			border-collapse:collapse;\n			border-spacing:0px;\n		}\n			#userList table td {\n				background:#FFF;\n				padding:5px 10px;\n				text-align:center;\n			}\n\n#userInfo {\n	width:250px;\n	position:absolute;\n	top:0; left:0;\n}\n	#userInfo p {\n		padding:15px;\n		border:1px solid #CCC;\n		background:rgba(80,120,255,0.05);\n	}\n\nfieldset {\n	border:0;\n	padding:0; margin:0;\n}\n";
},"useData":true})
exports['web+mongo/src/main/resources/webroot/js/app.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "// Userlist data array for filling in info box\nvar userListData = [];\n\n// DOM Ready =============================================================\n$(document).ready(function () {\n\n    // Populate the user table on initial page load\n    populateTable();\n\n    // Username link click\n    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);\n\n    // Add User button click\n    $('#btnAddUser').on('click', addUser);\n\n    // Delete User link click\n    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);\n\n});\n\n// Functions =============================================================\n\n// Fill table with data\nfunction populateTable() {\n\n    // Empty content string\n    var tableContent = '';\n\n    // jQuery AJAX call for JSON\n    $.getJSON('/users', function (data) {\n\n        // Stick our user data array into a userlist variable in the global object\n        userListData = data;\n\n        // For each item in our JSON, add a table row and cells to the content string\n        $.each(data, function () {\n            tableContent += '<tr>';\n            tableContent += '<td><a href=\"#\" class=\"linkshowuser\" rel=\"' + this.username + '\" title=\"Show Details\">' + this.username + '</a></td>';\n            tableContent += '<td>' + this.email + '</td>';\n            tableContent += '<td><a href=\"#\" class=\"linkdeleteuser\" rel=\"' + this._id + '\">delete</a></td>';\n            tableContent += '</tr>';\n        });\n\n        // Inject the whole content string into our existing HTML table\n        $('#userList table tbody').html(tableContent);\n    });\n};\n\n// Show User Info\nfunction showUserInfo(event) {\n\n    // Prevent Link from Firing\n    event.preventDefault();\n\n    // Retrieve username from link rel attribute\n    var thisUserName = $(this).attr('rel');\n\n    // Get Index of object based on id value\n    var arrayPosition = userListData.map(function (arrayItem) {\n        return arrayItem.username;\n    }).indexOf(thisUserName);\n\n    // Get our User Object\n    var thisUserObject = userListData[arrayPosition];\n\n    //Populate Info Box\n    $('#userInfoName').text(thisUserObject.fullname);\n    $('#userInfoAge').text(thisUserObject.age);\n    $('#userInfoGender').text(thisUserObject.gender);\n    $('#userInfoLocation').text(thisUserObject.location);\n\n};\n\n// Add User\nfunction addUser(event) {\n    event.preventDefault();\n\n    // Super basic validation - increase errorCount variable if any fields are blank\n    var errorCount = 0;\n    $('#addUser input').each(function (index, val) {\n        if ($(this).val() === '') {\n            errorCount++;\n        }\n    });\n\n    // Check and make sure errorCount's still at zero\n    if (errorCount === 0) {\n\n        // If it is, compile all user info into one object\n        var newUser = {\n            'username': $('#addUser fieldset input#inputUserName').val(),\n            'email': $('#addUser fieldset input#inputUserEmail').val(),\n            'fullname': $('#addUser fieldset input#inputUserFullname').val(),\n            'age': $('#addUser fieldset input#inputUserAge').val(),\n            'location': $('#addUser fieldset input#inputUserLocation').val(),\n            'gender': $('#addUser fieldset input#inputUserGender').val()\n        };\n\n        // Use AJAX to post the object to our adduser service\n        $.ajax({\n            type: 'POST',\n            data: newUser,\n            url: '/users'\n        }).done(function (response) {\n            // Clear the form inputs\n            $('#addUser fieldset input').val('');\n\n            // Update the table\n            populateTable();\n        }).fail(function () {\n            // If something goes wrong, alert the error message that our service returned\n            alert('Error: Something went wrong.');\n        });\n    }\n    else {\n        // If errorCount is more than 0, error out\n        alert('Please fill in all fields');\n        return false;\n    }\n};\n\n// Delete User\nfunction deleteUser(event) {\n\n    event.preventDefault();\n\n    // Pop up a confirmation dialog\n    var confirmation = confirm('Are you sure you want to delete this user?');\n\n    // Check and make sure the user confirmed\n    if (confirmation === true) {\n\n        // If they did, do our delete\n        $.ajax({\n            type: 'DELETE',\n            url: '/users/' + $(this).attr('rel')\n        }).done(function (response) {\n            // Update the table\n            populateTable();\n\n        }).fail(function () {\n            alert('Error: Something went wrong.');\n            // Update the table\n            populateTable();\n        });\n    } else {\n\n        // If they said no to the confirm, do nothing\n        return false;\n\n    }\n\n};\n";
},"useData":true})
exports['web+vue/src/main/js/components/counter/counter.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import Vue from 'vue';\nimport { Component } from 'vue-property-decorator';\n\n@Component\nexport default class CounterComponent extends Vue {\n  currentcount = 0;\n\n  incrementCounter() {\n    this.currentcount++;\n  }\n}\n";
},"useData":true})
exports['web+vue/src/main/js/components/counter/counter.vue.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <div>\n        <h1>Counter</h1>\n\n        <p>This is a simple example of a Vue.js component.</p>\n\n        <p>Current count: <strong>{{ currentcount }}</strong></p>\n\n        <button @click=\"incrementCounter\">Increment</button>\n    </div>\n</template>\n\n<script src=\"./counter.js\"></script>\n";
},"useData":true})
exports['web+vue/src/main/js/components/app/app.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import Vue from 'vue';\nimport { Component } from 'vue-property-decorator';\n\n@Component({\n  components: {\n    MenuComponent: require('../navmenu/navmenu.vue.html')\n  }\n})\nexport default class AppComponent extends Vue {\n}\n";
},"useData":true})
exports['web+vue/src/main/js/components/app/app.vue.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <div id='app-root' class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <menu-component />\n            </div>\n            <div class=\"col-sm-9\">\n                <router-view></router-view>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script src=\"./app.js\"></script>\n";
},"useData":true})
exports['web+vue/src/main/js/components/fetchdata/fetchdata.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import Vue from 'vue';\nimport { Component } from 'vue-property-decorator';\n\n@Component\nexport default class FetchDataComponent extends Vue {\n  forecasts = [];\n\n  mounted() {\n    fetch('api/weather-forecasts')\n      .then(response => response.json())\n      .then(data => {\n        this.forecasts = data;\n      });\n  }\n}\n";
},"useData":true})
exports['web+vue/src/main/js/components/fetchdata/fetchdata.vue.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <div>\n        <h1>Weather forecast</h1>\n\n        <p>This component demonstrates fetching data from the server.</p>\n\n        <table v-if=\"forecasts.length\" class=\"table\">\n            <thead>\n                <tr>\n                    <th>Date</th>\n                    <th>Temp. (C)</th>\n                    <th>Temp. (F)</th>\n                    <th>Summary</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr v-for=\"item in forecasts\">\n                    <td>{{ item.dateFormatted }}</td>\n                    <td>{{ item.temperatureC }}</td>\n                    <td>{{ item.temperatureF }}</td>\n                    <td>{{ item.summary }}</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <p v-else><em>Loading...</em></p>\n    </div>\n</template>\n\n<script src=\"./fetchdata.js\"></script>\n";
},"useData":true})
exports['web+vue/src/main/js/components/home/home.vue.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <div>\n        <h1>Hello, world!</h1>\n        <p>Welcome to your new single-page application, built with:</p>\n        <ul>\n            <li><a href=\"http://vertx.io/\">Vert.x</a> for polyglot server-side code</li>\n            <li><a href=\"https://vuejs.org/\">Vue.js</a> for client-side code</li>\n            <li><a href=\"https://webpack.github.io/\">Webpack</a> for building and bundling client-side resources</li>\n            <li><a href=\"http://getbootstrap.com/\">Bootstrap</a> for layout and styling</li>\n        </ul>\n        <p>To help you get started, we've also set up:</p>\n        <ul>\n            <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n            <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n            <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Vue app will be rebuilt and a new instance injected is into the page.</li>\n            <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n        </ul>\n    </div>\n</template>\n";
},"useData":true})
exports['web+vue/src/main/js/components/navmenu/navmenu.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return ".main-nav li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\n.main-nav li a.router-link-active,\n.main-nav li a.router-link-active:hover,\n.main-nav li a.router-link-active:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .main-nav .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .main-nav .navbar-header {\n        float: none;\n    }\n    .main-nav .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .main-nav .navbar ul {\n        float: none;\n    }\n    .main-nav .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .main-nav .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .main-nav .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n";
},"useData":true})
exports['web+vue/src/main/js/components/navmenu/navmenu.vue.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <div class=\"main-nav\">\n        <div class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/\">WebApplicationBasic</a>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <router-link to=\"/\" :exact=\"true\">\n                            <span class=\"glyphicon glyphicon-home\"></span> Home\n                        </router-link>\n                    </li>\n                    <li>\n                        <router-link to=\"/counter\">\n                            <span class=\"glyphicon glyphicon-education\"></span> Counter\n                        </router-link>\n                    </li>\n                    <li>\n                        <router-link to=\"/fetchdata\">\n                            <span class=\"glyphicon glyphicon-th-list\"></span> Fetch data\n                        </router-link>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</template>\n\n<style src=\"./navmenu.css\" />\n";
},"useData":true})
exports['openapi-server-sp/src/main/java/{packageDir}/services/impl/{serviceName}Impl.java'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  @Override\n  public void "
    + ((stack1 = ((helper = (helper = helpers.serviceMethodName || (depth0 != null ? depth0.serviceMethodName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"serviceMethodName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "(\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.path : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.cookie : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.query : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.parsedParameters : depth0)) != null ? stack1.header : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bodySchema : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    OperationRequest context, Handler<AsyncResult<OperationResponse>> resultHandler){\n    // Write your business logic here\n    resultHandler.handle(Future.succeededFuture(new OperationResponse().setStatusCode(501).setStatusMessage(\"Not Implemented\")));\n  }\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "    "
    + ((stack1 = (helpers.solveOasTypeForService || (depth0 && depth0.solveOasTypeForService) || alias2).call(alias1,"java",(depth0 != null ? depth0.schema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasTypeForService","hash":{},"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.sanitizedName || (depth0 != null ? depth0.sanitizedName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"sanitizedName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ",\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    "
    + ((stack1 = (helpers.solveOasTypeForService || (depth0 && depth0.solveOasTypeForService) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"java",(depth0 != null ? depth0.bodySchema : depth0),((stack1 = (data && data.root)) && stack1.modelsCache),{"name":"solveOasTypeForService","hash":{},"data":data})) != null ? stack1 : "")
    + " body,\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "package "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".services.impl;\n\nimport io.vertx.core.AsyncResult;\nimport io.vertx.core.Future;\nimport io.vertx.core.Handler;\nimport io.vertx.core.Vertx;\nimport io.vertx.ext.web.api.*;\n\nimport java.util.List;\nimport java.util.Map;\n\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".models.*;\nimport "
    + ((stack1 = ((helper = (helper = helpers["package"] || (depth0 != null ? depth0["package"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"package","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ".services."
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ";\n\npublic class "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "Impl implements "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " {\n\n  private Vertx vertx;\n\n  public "
    + ((stack1 = ((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "Impl(Vertx vertx) {\n    this.vertx = vertx;\n  }\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.operations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/app/app.component.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/app/app.component.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/app/app.component.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html',\n    styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/home/home.component.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n  <li><a href='http://vertx.io/'>Vert.x</a> for polyglot server-side code</li>\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for\n    client-side code\n  </li>\n  <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.\n  </li>\n  <li><strong>TODO: Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular app is\n    prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app\n    takes over.\n  </li>\n  <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code>\n    build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify\n    any file.\n  </li>\n  <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making\n    most changes. Within seconds of saving changes to files, your Angular app will be rebuilt and a new instance\n    injected is into the page.\n  </li>\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the\n    <code>webpack</code> build tool produces minified static CSS and JavaScript files.\n  </li>\n</ul>\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/home/home.component.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { Component } from '@angular/core';\n\n@Component({\n    selector: 'home',\n    templateUrl: './home.component.html'\n})\nexport class HomeComponent {\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/counter/counter.component.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Counter</h1>\n\n<p>This is a simple example of an Angular component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/counter/counter.component.spec.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "/// <reference path=\"../../../../../../node_modules/@types/jasmine/index.d.ts\" />\nimport { assert } from 'chai';\nimport { CounterComponent } from './counter.component';\nimport { TestBed, async, ComponentFixture } from '@angular/core/testing';\n\nlet fixture: ComponentFixture<CounterComponent>;\n\ndescribe('Counter component', () => {\n    beforeEach(() => {\n        TestBed.configureTestingModule({ declarations: [CounterComponent] });\n        fixture = TestBed.createComponent(CounterComponent);\n        fixture.detectChanges();\n    });\n\n    it('should display a title', async(() => {\n        const titleText = fixture.nativeElement.querySelector('h1').textContent;\n        expect(titleText).toEqual('Counter');\n    }));\n\n    it('should start with count 0, then increments by 1 when clicked', async(() => {\n        const countElement = fixture.nativeElement.querySelector('strong');\n        expect(countElement.textContent).toEqual('0');\n\n        const incrementButton = fixture.nativeElement.querySelector('button');\n        incrementButton.click();\n        fixture.detectChanges();\n        expect(countElement.textContent).toEqual('1');\n    }));\n});\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/counter/counter.component.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { Component } from '@angular/core';\n\n@Component({\n    selector: 'counter',\n    templateUrl: './counter.component.html'\n})\nexport class CounterComponent {\n    public currentCount = 0;\n\n    public incrementCounter() {\n        this.currentCount++;\n    }\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/fetchdata/fetchdata.component.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/fetchdata/fetchdata.component.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { Component, Inject } from '@angular/core';\nimport { Http } from '@angular/http';\n\n@Component({\n    selector: 'fetchdata',\n    templateUrl: './fetchdata.component.html'\n})\nexport class FetchDataComponent {\n    public forecasts: WeatherForecast[];\n\n    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {\n        http.get(baseUrl + 'api/weather-forecasts').subscribe(result => {\n            this.forecasts = result.json() as WeatherForecast[];\n        }, error => console.error(error));\n    }\n}\n\ninterface WeatherForecast {\n    dateFormatted: string;\n    temperatureC: number;\n    temperatureF: number;\n    summary: string;\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/navmenu/navmenu.component.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/navmenu/navmenu.component.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">WebApplicationBasic</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/counter']\">\n                        <span class='glyphicon glyphicon-education'></span> Counter\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/fetch-data']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";
},"useData":true})
exports['web+angular4/src/main/ts/app/components/navmenu/navmenu.component.ts'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { Component } from '@angular/core';\n\n@Component({\n    selector: 'nav-menu',\n    templateUrl: './navmenu.component.html',\n    styleUrls: ['./navmenu.component.css']\n})\nexport class NavMenuComponent {\n}\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/app/app.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/app/app.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <require from=\"../navmenu/navmenu.html\"></require>\n    <require from=\"./app.css\"></require>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <navmenu router.bind=\"router\"></navmenu>\n            </div>\n            <div class=\"col-sm-9 body-content\">\n                <router-view></router-view>\n            </div>\n        </div>\n    </div>\n</template>\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/app/app.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { PLATFORM } from 'aurelia-framework';\n\nexport class App {\n    configureRouter(config, router) {\n        config.title = 'Aurelia';\n        config.map([{\n            route: [ '', 'home' ],\n            name: 'home',\n            settings: { icon: 'home' },\n            moduleId: PLATFORM.moduleName('../home/home'),\n            nav: true,\n            title: 'Home'\n        }, {\n            route: 'counter',\n            name: 'counter',\n            settings: { icon: 'education' },\n            moduleId: PLATFORM.moduleName('../counter/counter'),\n            nav: true,\n            title: 'Counter'\n        }, {\n            route: 'fetch-data',\n            name: 'fetchdata',\n            settings: { icon: 'th-list' },\n            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),\n            nav: true,\n            title: 'Fetch data'\n        }]);\n\n        this.router = router;\n    }\n}\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/counter/counter.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <h1>Counter</h1>\n\n    <p>This is a simple example of an Aurelia component.</p>\n\n    <p>Current count: <strong>${currentCount}</strong></p>\n\n    <button click.delegate=\"incrementCounter()\">Increment</button>\n</template>\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/counter/counter.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "export class Counter {\n    currentCount = 0;\n\n    incrementCounter() {\n        this.currentCount++;\n    }\n}\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/fetchdata/fetchdata.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <h1>Weather forecast</h1>\n\n    <p>This component demonstrates fetching data from the server.</p>\n\n    <p if.bind=\"!forecasts\"><em>Loading...</em></p>\n\n    <table if.bind=\"forecasts\" class=\"table\">\n        <thead>\n            <tr>\n                <th>Date</th>\n                <th>Temp. (C)</th>\n                <th>Temp. (F)</th>\n                <th>Summary</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr repeat.for=\"forecast of forecasts\">\n                <td>${ forecast.dateFormatted }</td>\n                <td>${ forecast.temperatureC }</td>\n                <td>${ forecast.temperatureF }</td>\n                <td>${ forecast.summary }</td>\n            </tr>\n        </tbody>\n    </table>\n</template>\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/fetchdata/fetchdata.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "import { HttpClient } from 'aurelia-fetch-client';\nimport { inject } from 'aurelia-framework';\n\n@inject(HttpClient)\nexport class Fetchdata {\n    forecasts;\n\n    constructor(http) {\n        http.fetch('api/weather-forecasts')\n            .then(result => result.json())\n            .then(data => {\n                this.forecasts = data;\n            });\n    }\n}\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/navmenu/navmenu.css'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.au-target.link-active a,\nli.au-target.link-active a:hover,\nli.au-target.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/navmenu/navmenu.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template bindable=\"router\">\n    <require from=\"./navmenu.css\"></require>\n    <div class=\"main-nav\">\n        <div class=\"navbar navbar-inverse\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#/home\">WebApplicationBasic</a>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li repeat.for = \"row of router.navigation\" class=\"${ row.isActive ? 'link-active' : '' }\" >\n                        <a href.bind = \"row.href\">\n                            <span class=\"glyphicon glyphicon-${ row.settings.icon }\"></span> ${ row.title }\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</template>\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/home/home.html'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<template>\n    <h1>Hello, world!</h1>\n    <p>Welcome to your new single-page application, built with:</p>\n    <ul>\n        <li><a href=\"http://vertx.io/\">Vert.x</a> for polyglot server-side code</li>\n        <li><a href=\"http://aurelia.io/\">Aurelia</a> and <a href=\"http://www.typescriptlang.org/\">TypeScript</a> for client-side code</li>\n        <li><a href=\"https://webpack.github.io/\">Webpack</a> for building and bundling client-side resources</li>\n        <li><a href=\"http://getbootstrap.com/\">Bootstrap</a> for layout and styling</li>\n    </ul>\n    <p>To help you get started, we've also set up:</p>\n    <ul>\n        <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n        <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n        <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n    </ul>\n</template>\n";
},"useData":true})
exports['web+aurelia/src/main/js/app/components/home/home.js'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "export class Home {\n}\n";
},"useData":true})
exports['graal-nativeimage/src/main/resources/META-INF/native-image/io.vertx/vertx-core/native-image.properties'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "Args =  --enable-all-security-services \\\n        -H:+ReportUnsupportedElementsAtRuntime \\\n        --allow-incomplete-classpath \\\n        --rerun-class-initialization-at-runtime=io.netty.handler.codec.http2.Http2CodecUtil \\\n        --delay-class-initialization-to-runtime=io.netty.handler.codec.http.HttpObjectEncoder,io.netty.handler.codec.http2.DefaultHttp2FrameWriter,io.netty.handler.codec.http.websocketx.WebSocket00FrameEncoder,io.netty.handler.ssl.JdkNpnApplicationProtocolNegotiator,io.netty.handler.ssl.ReferenceCountedOpenSslEngine \\\n        -H:IncludeResources=(META-INF/vertx|META-INF/services|static|webroot|template)/.* \\\n        -H:ReflectionConfigurationFiles=classes/${.}/reflection.json\n\nJavaArgs =  -Dvertx.disableDnsResolver=true\n";
},"useData":true})
exports['graal-nativeimage/src/main/resources/META-INF/native-image/io.vertx/vertx-core/reflection.json'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "[\n  {\n    \"name\": \"java.util.LinkedHashMap\",\n    \"methods\": [\n      { \"name\": \"<init>\", \"parameterTypes\": [] }\n    ]\n  }\n]\n";
},"useData":true})
exports['editorconfig/.editorconfig'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "root = true\n\n[*]\ncharset = utf-8\nindent_style = space\nindent_size = 2\ntrim_trailing_whitespace = true\nend_of_line = lf\ninsert_final_newline = true";
},"useData":true})
exports['git/.gitignore'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "# build files\ntarget\nbuild\nlib_managed\n# runtime files\nnode_modules\n.vertx\n# ide\n.classpath\n.project\n.idea\n.vscode\n\n";
},"useData":true})
exports['npm/.babelrc'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"presets\": [\"env\"]\n}\n";
},"useData":true})
exports['sbt/.scalafmt'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "--style defaultWithAlign\n--spacesInImportCurlyBraces true\n--danglingParentheses true\n";
},"useData":true})
exports['web+aurelia/.babelrc'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"presets\": [\"env\", \"stage-2\"],\n  \"plugins\": [\"transform-runtime\", \"transform-decorators-legacy\"]\n}\n";
},"useData":true})
exports['web+knockout/.babelrc'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"presets\": [\"env\"]\n}\n";
},"useData":true})
exports['web+react/.babelrc'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"presets\": [\"env\", \"react\"]\n}\n";
},"useData":true})
exports['web+react-redux/.babelrc'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"presets\": [\"env\", \"react\"]\n}\n";
},"useData":true})
exports['web+vue/.babelrc'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{\n  \"presets\": [\"env\", \"stage-2\"],\n  \"plugins\": [\"transform-runtime\", \"transform-decorators-legacy\"]\n}\n";
},"useData":true})
require('../handlebars_helpers_loader.js').load(Handlebars);
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class Server {

    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/hfendpoint", new Handler());
        server.setExecutor(null);
        server.start();
    }

    static class Handler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
        	DatabaseConnector connecter = new DatabaseConnector();
        	ConvertToJSON jsonConvert = new ConvertToJSON(connecter.getResult());
            String response = jsonConvert.convert();
            exchange.sendResponseHeaders(10000 , response.getBytes().length);
            OutputStream output = exchange.getResponseBody();
            output.write(response.getBytes());
            output.close();
        }
    }

}

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.Headers;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class Server {

    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/jsondata", new Handler());
        server.setExecutor(null);
        server.start();
        System.out.println("Server is running...");
    }

    static class Handler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
        	DatabaseConnector connecter = new DatabaseConnector();
        	ConvertToJSON jsonConvert = new ConvertToJSON(connecter.getResult());
        	Headers header = exchange.getResponseHeaders();
        	header.add("Content-Type", "application/json;charset=utf-8");
        	header.add("Access-Control-Allow-Origin", "*");
        	header.add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            String response = jsonConvert.convert();
            exchange.sendResponseHeaders(200 , response.getBytes("UTF-8").length);
            OutputStream output = exchange.getResponseBody();
            output.write(response.getBytes("UTF-8"));
            output.close();
        }
    }
}

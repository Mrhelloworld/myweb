package com.json.lab;

import java.io.StringWriter;

import org.junit.Test;

import com.alibaba.fastjson.JSONObject;

public class JsonEncodeDemo {
	public static void main(String[] args) {

	}

	@Test
	public void test01() {
		JSONObject obj = new JSONObject();

		obj.put("name", "foo");
		obj.put("num", new Integer(100));
		obj.put("balance", new Double(1000.21));
		obj.put("is_vip", new Boolean(true));

		System.out.print(obj);
	}

	@Test
	public void test02() {
		JSONObject obj = new JSONObject();

		obj.put("name", "foo");
		obj.put("num", new Integer(100));
		obj.put("balance", new Double(1000.21));
		obj.put("is_vip", new Boolean(true));

		StringWriter out = new StringWriter();
		obj.writeJSONString(out);

		String jsonText = out.toString();
		System.out.print(jsonText);
	}
}

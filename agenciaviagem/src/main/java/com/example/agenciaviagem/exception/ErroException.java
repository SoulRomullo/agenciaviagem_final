package com.example.agenciaviagem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ErroException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
	
	public ErroException(String mensagem) {
		super(mensagem);
	}

}
